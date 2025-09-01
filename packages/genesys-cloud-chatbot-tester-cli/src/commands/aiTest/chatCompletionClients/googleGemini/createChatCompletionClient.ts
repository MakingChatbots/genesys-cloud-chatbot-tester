import { ContentListUnion, GoogleGenAI } from '@google/genai';
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
        await ai.models.generateContent({
          ...(model ? { model } : { model: 'gemini-2.0-flash' }),
          config: {
            temperature,
            topP,
            topK,
            seed,
            maxOutputTokens: 1024,
          },
          contents: 'Say "hello world"',
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
    ): Promise<CustomerUtterance | null> {
      // customer = model
      // bot = user

      // TODO Better understand this constraint
      const historyToUse = [
        // First element of history must always be a customer
        ...(history[0]?.role === 'bot' ? [{ content: '...', role: 'customer' }] : []),
        ...history,
      ];

      const contents: ContentListUnion = [
        ...historyToUse.map((u) => ({
          role: u.role === 'bot' ? 'user' : 'model',
          parts: [{ text: u.content, type: 'text' }],
        })),
        {
          role: 'user',
          parts: [{ text: botMessage?.content ?? '...', type: 'text' }],
        },
      ];

      const response = await ai.models.generateContent({
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
        contents,
      });

      return { content: response.text ?? '', role: 'customer' };
    },
  };
}
