import {describe,vi, beforeEach, test, expect} from 'vitest';
import { readFileSync } from 'fs';
import { Command } from 'commander';
import stripAnsi from 'strip-ansi';
import { createCli } from '../../../../../src/createCli';

describe('Scenario Section Validated', () => {
  let capturedOutput: {
    errOut: string[];
  };

  let fsReadFileSync: jest.MockedFunction<typeof readFileSync>;

  let cli: Command;

  beforeEach(() => {
    fsReadFileSync = vi.fn();

    const webMessengerSession = { on: vi.fn(), close: vi.fn() };
    const conversation = { waitForConversationToStart: vi.fn(), sendText: vi.fn() };

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
      fsReadFileSync,
      fsAccessSync: vi.fn(),
      webMessengerSessionFactory: vi.fn().mockReturnValue(webMessengerSession),
      conversationFactory: vi.fn().mockReturnValue(conversation),
    });
  });

  test('scenario step can only contain one element', async () => {
    fsReadFileSync.mockReturnValue(`
config:
  deploymentId: xx
  region: xx
scenarios:
  scenario-name:
    - say: hi from scenario
      waitForReplyContaining: hello
`);
    await expect(
      cli.parseAsync([...['node', '/path/to/cli'], 'scripted', ...['test-path']]),
    ).rejects.toBeDefined();

    expect(capturedOutput.errOut.map(stripAnsi)).toStrictEqual([
      '"scenarios.scenario-name[0]" must have 1 key\n',
    ]);
  });

  test("scenario step can only contain 'say' or 'waitForReplyContaining'", async () => {
    fsReadFileSync.mockReturnValue(`
config:
  deploymentId: xx
  region: xx
scenarios:
  scenario-name:
    - testing: 123
`);
    await expect(
      cli.parseAsync([...['node', '/path/to/cli'], 'scripted', ...['test-path']]),
    ).rejects.toBeDefined();

    expect(capturedOutput.errOut.map(stripAnsi)).toStrictEqual([
      '"scenarios.scenario-name[0].testing" is not allowed\n',
    ]);
  });
});
