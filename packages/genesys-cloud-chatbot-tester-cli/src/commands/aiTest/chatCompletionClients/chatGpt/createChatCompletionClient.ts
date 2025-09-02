import {
  BotUtterance,
  ChatCompletionClient,
  PreflightResult,
  Utterance,
} from '../chatCompletionClient';
import OpenAI from 'openai';
import { ChatGptConfig } from '../../testScript/modelTypes';
import { ResponseInput } from 'openai/src/resources/responses/responses';

export function createChatCompletionClient(
  { model = 'gpt-5' }: ChatGptConfig,
  apiKey: string,
  maxRetries = 5,
): ChatCompletionClient {
  const client = new OpenAI({ apiKey, maxRetries });

  return {
    getProviderName(): string {
      return 'ChatGPT';
    },
    async preflightCheck(): Promise<PreflightResult> {
      try {
        await client.responses.create({
          model,
          input: [
            {
              role: 'user',
              content: 'Say "hello world"',
            },
          ],
        });

        return { ok: true };
      } catch (error) {
        return {
          ok: false,
          reasonForError: error instanceof Error ? error.message : String(error),
        };
      }
    },

    async generateCustomerUtterance(
      context: string,
      history: Utterance[],
      botMessage: BotUtterance | null,
    ): Promise<Utterance | null> {
      const openAiHistory: ResponseInput = history.map((u) => ({
        role: u.role === 'bot' ? 'user' : 'assistant',
        content: u.content,
      }));

      const messages: ResponseInput = [
        {
          role: 'system',
          content: context,
        },
        ...openAiHistory,
        {
          role: 'user',
          content: botMessage?.content ?? '...',
        },
      ];

      const { choices } = await client.responses.create({
        model,
        input: messages,
      });

      if (choices[0]?.message?.content) {
        return { role: 'customer', content: choices[0].message.content };
      } else {
        return null;
      }
    },
  };
}
