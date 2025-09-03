import Joi from 'joi';
import { SupportedAiProviders, TestPromptFile } from './modelTypes';

export const schema = Joi.object<TestPromptFile>({
  config: Joi.object({
    deploymentId: Joi.string(),
    region: Joi.string(),
    origin: Joi.string(),
    ai: Joi.object({
      provider: Joi.string()
        .valid(SupportedAiProviders.GoogleGemini, SupportedAiProviders.ChatGpt)
        .required(),
      config: Joi.when('provider', {
        is: SupportedAiProviders.GoogleGemini,
        then: Joi.object({
          temperature: Joi.number(),
          topK: Joi.number(),
          topP: Joi.number(),
          seed: Joi.number(),
          model: Joi.string().regex(/\d{3}/),
        }),
      }).when('provider', {
        is: SupportedAiProviders.ChatGpt,
        then: Joi.object({
          model: Joi.string(),
        }),
      }),
    }).required(),
  }).required(),
  scenarios: Joi.object()
    .min(1)
    .pattern(
      /./,
      Joi.object({
        setup: Joi.object({
          placeholders: Joi.object()
            .min(1)
            .pattern(/./, Joi.array().items(Joi.string()).required()),
          prompt: Joi.string().required(),
          terminatingPhrases: Joi.object({
            pass: Joi.array().items(Joi.string()).min(1).required(),
            fail: Joi.array().items(Joi.string()).min(1).required(),
          }).required(),
        }).required(),
        followUp: Joi.object({
          prompt: Joi.string().required(),
          terminatingPhrases: Joi.object({
            pass: Joi.array().items(Joi.string()).min(1).required(),
            fail: Joi.array().items(Joi.string()).min(1).required(),
          }).required(),
        }).optional(),
      }).required(),
    )
    .required(),
});
