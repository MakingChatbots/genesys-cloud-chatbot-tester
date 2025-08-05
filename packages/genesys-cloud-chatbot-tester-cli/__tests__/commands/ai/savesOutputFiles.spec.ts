import {describe,vi, beforeEach, test, expect} from 'vitest';
import { readFileSync } from 'fs';
import { Command } from 'commander';
import { createCli } from '../../../src/createCli';
import { writeFileSync } from 'node:fs';
import stripAnsi from 'strip-ansi';

const yamlFileContents = `
config:
  deploymentId: test-deployment-id-1
  region: test-region-1
  ai:
    provider: chatgpt
scenarios:
  Test:
    setup:
      prompt: Test prompt
      terminatingPhrases:
        pass: ["PASS"]
        fail: ["FAIL"]
`;

describe('AI saving output', () => {
  let fsReadFileSync: jest.MockedFunction<typeof readFileSync>;
  let fsWriteFileSync: jest.MockedFunction<typeof writeFileSync>;

  let cli: Command;
  let capturedOutput: {
    errOut: string[];
    stdOut: string[];
  };

  beforeEach(() => {
    capturedOutput = {
      errOut: [],
      stdOut: [],
    };

    fsReadFileSync = vi.fn().mockReturnValue(yamlFileContents);
    fsWriteFileSync = vi.fn();

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
      fsAccessSync: vi.fn(),
      fsReadFileSync,
      fsWriteFileSync,
      webMessengerSessionFactory: vi.fn().mockReturnValue({ on: vi.fn(), close: vi.fn() }),
      openAiCreateChatCompletionClient: () => ({
        getProviderName: vi.fn().mockReturnValue('mock-chatgpt'),
        predict: vi.fn().mockResolvedValue({ role: 'customer', content: 'PASS' }),
        preflightCheck: vi.fn().mockResolvedValue({ ok: true }),
      }),
      googleAiCreateChatCompletionClient: vi.fn(),
      conversationFactory: jest
        .fn()
        .mockReturnValue({ waitForConversationToStart: vi.fn(), sendText: vi.fn() }),
      processEnv: { OPENAI_API_KEY: 'test' },
    });
  });

  test('Calls write operation with filename and conversation contents', async () => {
    await cli.parseAsync([
      ...['node', '/path/to/cli'],
      'ai',
      ...['/test/path', '--out-dir', '/test/dir/'],
    ]);

    expect(fsWriteFileSync).toHaveBeenCalledTimes(1);

    const [filename, body] = fsWriteFileSync.mock.calls[0];
    expect(filename).toMatch(/\/test\/dir\/test-\d+\.json/);
    expect(JSON.parse(body as string)).toStrictEqual({
      placeholderValues: {},
      prompt: 'Test prompt',
      reasonForEnd: {
        type: 'pass',
        description: "Terminating phrase found in response: 'PASS'",
      },
      transcript: [
        {
          role: 'customer',
          content: 'PASS',
        },
      ],
    });
  });

  test('Writes out errors saving output file ', async () => {
    fsWriteFileSync.mockImplementation(() => {
      throw new Error('dummy error');
    });

    await cli.parseAsync([
      ...['node', '/path/to/cli'],
      'ai',
      ...['/test/path', '--out-dir', '/test/dir/'],
    ]);

    expect(fsWriteFileSync).toHaveBeenCalledTimes(1);
    expect(capturedOutput.errOut.map(stripAnsi).join('')).toStrictEqual(`
Failed to save output file:
dummy error
`);
  });
});
