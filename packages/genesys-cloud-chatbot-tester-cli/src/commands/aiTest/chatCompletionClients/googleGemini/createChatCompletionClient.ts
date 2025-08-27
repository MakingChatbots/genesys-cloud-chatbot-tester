import { GoogleGenAI } from '@google/genai';
import {
  BotUtterance,
  ChatCompletionClient,
  CustomerUtterance,
  PreflightResult,
  Utterance,
} from '../chatCompletionClient';
import { GoogleGeminiConfig } from '../../testScript/modelTypes';

export function createChatCompletionClient({
  model,
  temperature,
  topP,
  topK,
  seed,
}: GoogleGeminiConfig): ChatCompletionClient {
  const ai = new GoogleGenAI({});

  return {
    getProviderName(): string {
      return 'Google Gemini';
    },
    async preflightCheck(): Promise<PreflightResult> {
      try {
        const chat = ai.chats.create({
          ...(model ? { model } : { model: 'gemini-2.0-flash' }),
          config: {
            temperature,
            topP,
            topK,
            seed,
            maxOutputTokens: 1024,
          },
        });

        await chat.sendMessage({ message: 'Single word response. What colour is the sky?' });

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
    ): Promise<CustomerUtterance | null> {
      // customer = model
      // bot = user

      const historyToUse = [
        // First element of history must always be a customer
        ...(history[0]?.role === 'bot' ? [{ content: '...', role: 'customer' }] : []),
        ...history,
      ];

      const chat = ai.chats.create({
        ...(model ? { model } : { model: 'gemini-2.0-flash' }),
        config: {
          // Example user personas etc https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/system-instruction-introduction
          systemInstruction: context,
          temperature,
          topP,
          topK,
          seed,
          maxOutputTokens: 1024,
        },
        history: [
          ...historyToUse.map((u) => ({
            role: u.role === 'bot' ? 'user' : 'model',
            content: u.content,
          })),
        ],
      });

      const { text } = await chat.sendMessage(
        // Google requires at least one message. This message is hopefully innocuous enough not to lead to an unexpected result.
        { message: !botMessage || botMessage?.content === null ? '...' : botMessage.content },
      );

      return { content: text ?? '', role: 'customer' };
    },
  };
}
