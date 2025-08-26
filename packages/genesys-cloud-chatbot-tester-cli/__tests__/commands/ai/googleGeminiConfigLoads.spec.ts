import { describe, vi, beforeEach, test, expect, MockedFunction, Mocked } from 'vitest';
import { readFileSync } from 'node:fs';
import { Command } from 'commander';
import { createCli } from '../../../src/createCli';
import { ChatCompletionClient } from '../../../src/commands/aiTest/chatCompletionClients/chatCompletionClient';
import stripAnsi from 'strip-ansi';
import * as googleGemini from '../../../src/commands/aiTest/chatCompletionClients/googleGemini/createChatCompletionClient';

describe('Google Gemini config', () => {
  let fsReadFileSync: MockedFunction<typeof readFileSync>;

  let mockGoogleAiChatCompletionClientFactory: MockedFunction<
    typeof googleGemini.createChatCompletionClient
  >;
  let mockGoogleAiChatCompletionClient: Mocked<ChatCompletionClient>;

  let processEnv: NodeJS.ProcessEnv;

  let cli: Command;
  let capturedOutput: {
    errOut: string[];
    stdOut: string[];
  };

  beforeEach(() => {
    mockGoogleAiChatCompletionClient = {
      getProviderName: vi.fn().mockReturnValue('mock-google-gemini'),
      generateCustomerUtterance: vi.fn().mockResolvedValue({ role: 'customer', content: 'PASS' }),
      preflightCheck: vi.fn().mockResolvedValue({ ok: true }),
    };
    mockGoogleAiChatCompletionClientFactory = vi
      .fn()
      .mockReturnValue(mockGoogleAiChatCompletionClient);

    capturedOutput = {
      errOut: [],
      stdOut: [],
    };
    // Using `as any` here to bypass issues with mocking an overloaded function
    fsReadFileSync = vi.fn();

    processEnv = {};

    const cliCommand = new Command().exitOverride(() => {
      throw new Error('CLI Command errored');
    });

    const scenarioTestCommand = new Command()
      .exitOverride(() => {
        throw new Error('Scenario Test Command errored');
      })
      .configureOutput({
        writeErr: (str) => {
          console.error(str);
          capturedOutput.errOut.push(str);
        },
        writeOut: (str) => {
          console.log(str);
          capturedOutput.stdOut.push(str);
        },
      });

    cli = createCli(cliCommand, undefined, {
      command: scenarioTestCommand,
      fsReadFileSync: fsReadFileSync as unknown as typeof import('node:fs').readFileSync,
      fsAccessSync: vi.fn(),
      webMessengerSessionFactory: vi.fn().mockReturnValue({ on: vi.fn(), close: vi.fn() }),
      openAiCreateChatCompletionClient: () => {
        throw new Error('Not implemented');
      },
      googleGeminiCreateChatCompletionClient: mockGoogleAiChatCompletionClientFactory,
      conversationFactory: vi
        .fn()
        .mockReturnValue({ waitForConversationToStart: vi.fn(), sendText: vi.fn() }),
      processEnv,
    });
  });

  test('google-gemini provider is loaded', async () => {
    fsReadFileSync.mockReturnValue(`
config:
  deploymentId: test-deployment-id
  region: test-region
  origin: test-origin
  ai:
    provider: google-gemini
scenarios:
  Test:
    setup:
      prompt: Test prompt
      terminatingPhrases:
        pass: ["PASS"]
        fail: ["FAIL"]
  `);

    await cli.parseAsync([...['node', '/path/to/cli'], 'ai', ...['/test/path']]);

    expect(mockGoogleAiChatCompletionClientFactory).toHaveBeenCalledWith({
      location: 'test-location-from-config',
      project: 'test-project-from-config',
    });

    expect(mockGoogleAiChatCompletionClient.preflightCheck).toHaveBeenCalled();
    expect(mockGoogleAiChatCompletionClient.generateCustomerUtterance).toHaveBeenCalled();
    expect(capturedOutput.stdOut.map(stripAnsi).join('')).toContain(
      "Terminating phrase found in response: 'PASS'",
    );
  });

  test('project can be defined as an environment variable', async () => {
    processEnv['VERTEX_AI_PROJECT'] = 'test-project-from-env';
    processEnv['VERTEX_AI_LOCATION'] = 'test-location-from-env';

    fsReadFileSync.mockReturnValue(`
  config:
    deploymentId: test-deployment-id
    region: test-region
    origin: test-origin
    ai:
      provider: google-gemini
  scenarios:
    Test:
      setup:
        prompt: Test prompt
        terminatingPhrases:
          pass: ["PASS"]
          fail: ["FAIL"]
    `);

    await cli.parseAsync([...['node', '/path/to/cli'], 'ai', ...['/test/path']]);

    expect(mockGoogleAiChatCompletionClientFactory).toHaveBeenCalledWith({
      location: 'test-location-from-env',
      project: 'test-project-from-env',
    });

    expect(mockGoogleAiChatCompletionClient.preflightCheck).toHaveBeenCalled();
    expect(mockGoogleAiChatCompletionClient.generateCustomerUtterance).toHaveBeenCalled();
    expect(capturedOutput.stdOut.map(stripAnsi).join('')).toContain(
      "Terminating phrase found in response: 'PASS'",
    );
  });

  test('loading fails if project and location not defined in either', async () => {
    fsReadFileSync.mockReturnValue(`
  config:
    deploymentId: test-deployment-id
    region: test-region
    origin: test-origin
    ai:
      provider: google-gemini
      config:
        temperature: 123
  scenarios:
    Test:
      setup:
        prompt: Test prompt
        terminatingPhrases:
          pass: ["PASS"]
          fail: ["FAIL"]
    `);

    try {
      await cli.parseAsync([...['node', '/path/to/cli'], 'ai', ...['/test/path']]);
    } catch {
      /* Intentionally ignored */
    }

    expect(capturedOutput.errOut.map(stripAnsi).join('')).toContain(
      'Failed to validate Google Vertex AI Location and Project config. Provide these in the config file or via environment variables.',
    );
  });

  test('config loaded even if project and location defined in env variable', async () => {
    processEnv['VERTEX_AI_PROJECT'] = 'test-project-from-env';
    processEnv['VERTEX_AI_LOCATION'] = 'test-location-from-env';

    fsReadFileSync.mockReturnValue(`
  config:
    deploymentId: test-deployment-id
    region: test-region
    origin: test-origin
    ai:
      provider: google-gemini
      config:
        temperature: 123
  scenarios:
    Test:
      setup:
        prompt: Test prompt
        terminatingPhrases:
          pass: ["PASS"]
          fail: ["FAIL"]
    `);

    await cli.parseAsync([...['node', '/path/to/cli'], 'ai', ...['/test/path']]);

    expect(mockGoogleAiChatCompletionClientFactory).toHaveBeenCalledWith({
      location: 'test-location-from-env',
      project: 'test-project-from-env',
      temperature: 123,
    });

    expect(capturedOutput.stdOut.map(stripAnsi).join('')).toContain(
      "Terminating phrase found in response: 'PASS'",
    );
  });
});
