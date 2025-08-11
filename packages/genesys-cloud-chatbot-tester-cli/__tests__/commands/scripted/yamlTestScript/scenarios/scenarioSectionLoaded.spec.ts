import { describe, vi, beforeEach, test, expect, MockedFunction, Mocked } from 'vitest';
import { accessSync, readFileSync } from 'node:fs';
import { Command } from 'commander';
import { Conversation, WebMessengerSession } from '@makingchatbots/genesys-cloud-chatbot-tester';
import { createCli } from '../../../../../src/createCli';
import { when } from 'vitest-when';

describe('Test script YAML loaded', () => {
  const validScenarioFilePath = '/test/path/config.json';

  let capturedOutput: {
    errOut: string[];
  };

  let fsReadFileSync: MockedFunction<typeof readFileSync>;
  let fsAccessSync: MockedFunction<typeof accessSync>;

  let webMessengerSession: Mocked<Pick<WebMessengerSession, 'on' | 'close'>>;
  let conversation: Mocked<Pick<Conversation, 'waitForConversationToStart' | 'sendText'>>;

  let cli: Command;

  beforeEach(() => {
    fsAccessSync = vi.fn();
    fsReadFileSync = vi.fn();

    webMessengerSession = { on: vi.fn(), close: vi.fn() };
    conversation = { waitForConversationToStart: vi.fn(), sendText: vi.fn() };

    capturedOutput = {
      errOut: [],
    };

    const cliCommand = new Command()
      .exitOverride(() => {
        throw new Error('CLI Command errored');
      })
      .configureOutput({
        writeErr: (str) => capturedOutput.errOut.push(str),
      });

    const scenarioTestCommand = new Command()
      .exitOverride(() => {
        throw new Error('Scenario Test Command errored');
      })
      .configureOutput({
        writeErr: (str) => capturedOutput.errOut.push(str),
      });

    cli = createCli(cliCommand, {
      command: scenarioTestCommand,
      fsReadFileSync: fsReadFileSync as unknown as typeof import('node:fs').readFileSync,
      fsAccessSync,
      webMessengerSessionFactory: vi.fn().mockReturnValue(webMessengerSession),
      conversationFactory: vi.fn().mockReturnValue(conversation),
    });
  });

  // TODO Fix
  // test('Error output if file inaccessible', async () => {
  //   fsAccessSync.mockImplementation(() => {
  //     throw new Error('force app to exit');
  //   });
  //
  //   await expect(
  //     cli.parseAsync([...['node', '/path/to/cli'], 'scripted', ...['test-file.yml']]),
  //   ).rejects.toBeDefined();
  //
  //   expect(capturedOutput.errOut.map(stripAnsi)).toStrictEqual([
  //     "error: command-argument value 'test-file.yml' is invalid for argument 'filePath'. File 'test-file.yml' is not readable\n",
  //   ]);
  // });

  test('Loads test script from YAML file', async () => {
    const yaml = `
config:
  deploymentId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  region: xxxx.pure.cloud
scenarios:
  scenario1:
    - say: hi from scenario 1
  scenario2:
    - say: hi from scenario 2
`;

    when(fsReadFileSync).calledWith(validScenarioFilePath, 'utf8').thenReturn(yaml);

    await cli.parseAsync([...['node', '/path/to/cli'], 'scripted', ...[validScenarioFilePath]]);

    expect(capturedOutput.errOut).toStrictEqual([]);

    expect(conversation.sendText).toHaveBeenCalledWith('hi from scenario 1');
    expect(conversation.sendText).toHaveBeenCalledWith('hi from scenario 2');
  });
});
