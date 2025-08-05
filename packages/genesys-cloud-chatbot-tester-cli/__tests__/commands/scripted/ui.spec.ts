import {describe,vi, beforeEach, test, expect} from 'vitest';
import { accessSync, readFileSync } from 'fs';
import { Command } from 'commander';
import { Conversation, WebMessengerSession } from '@makingchatbots/genesys-cloud-chatbot-tester';
import stripAnsi from 'strip-ansi';
import { createCli } from '../../../src/createCli';

describe('Test script YAML loaded', () => {
  let capturedOutput: {
    errOut: string[];
    stdOut: string[];
  };

  let fsReadFileSync: jest.MockedFunction<typeof readFileSync>;
  let fsAccessSync: jest.MockedFunction<typeof accessSync>;

  let webMessengerSession: jest.Mocked<Pick<WebMessengerSession, 'on' | 'close'>>;
  let conversation: jest.Mocked<Pick<Conversation, 'waitForConversationToStart' | 'sendText'>>;

  let cli: Command;

  beforeEach(() => {
    fsAccessSync = vi.fn();
    fsReadFileSync = vi.fn();

    webMessengerSession = { on: vi.fn(), close: vi.fn() };
    conversation = { waitForConversationToStart: vi.fn(), sendText: vi.fn() };

    capturedOutput = {
      errOut: [],
      stdOut: [],
    };

    const cliCommand = new Command()
      .exitOverride(() => {
        throw new Error('CLI Command errored');
      })
      .configureOutput({
        writeErr: (str) => capturedOutput.errOut.push(str),
        writeOut: (str) => capturedOutput.stdOut.push(str),
      });

    const scenarioTestCommand = new Command()
      .exitOverride(() => {
        throw new Error('Scenario Test Command errored');
      })
      .configureOutput({
        writeErr: (str) => capturedOutput.errOut.push(str),
        writeOut: (str) => capturedOutput.stdOut.push(str),
      });

    cli = createCli(cliCommand, {
      command: scenarioTestCommand,
      fsReadFileSync,
      fsAccessSync,
      webMessengerSessionFactory: vi.fn().mockReturnValue(webMessengerSession),
      conversationFactory: vi.fn().mockReturnValue(conversation),
    });
  });

  test('Summary at end of test', async () => {
    const yaml = `
config:
  deploymentId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  region: xxxx.pure.cloud
scenarios:
  scenario1:
    - say: hi from scenario 1
`;

    fsReadFileSync.mockReturnValue(yaml);
    try {
      await cli.parseAsync([
        ...['node', '/path/to/cli'],
        ...['scripted', '/test/path/config.json'],
      ]);
    } catch {
      // Intentionally ignored
    }

    expect(capturedOutput.errOut.map(stripAnsi)).toStrictEqual([]);
    expect(capturedOutput.stdOut.map(stripAnsi).join('')).toStrictEqual(`
scenario1 (PASS)
---------------------

Scenario Test Results
---------------------
PASS - scenario1
`);
  });
});
