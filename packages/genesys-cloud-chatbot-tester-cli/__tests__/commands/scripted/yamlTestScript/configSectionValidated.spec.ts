import {describe,vi, beforeEach, test, expect} from 'vitest';
import { readFileSync } from 'fs';
import { Command } from 'commander';
import stripAnsi from 'strip-ansi';
import { createCli } from '../../../../src/createCli';

describe('Session Config Validated', () => {
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

  test.each([
    [
      {
        expectedError: '"region" is required\n',
        configSection: ['deploymentId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'],
      },
    ],
    [
      {
        expectedError: '"config.region" must be a string\n',
        configSection: ['deploymentId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 'region: 1'],
      },
    ],
    [{ expectedError: '"deploymentId" is required\n', configSection: ['region: xx'] }],
    [
      {
        expectedError: '"config.deploymentId" must be a string\n',
        configSection: ['deploymentId: 1', 'region: xx'],
      },
    ],
    [
      {
        expectedError: '"config.origin" must be a string\n',
        configSection: ['deploymentId: xx', 'region: xx', 'origin: 1'],
      },
    ],
  ])("Config from YAML validated: '%s'", async ({ expectedError, configSection }) => {
    fsReadFileSync.mockReturnValue(`
config:
  ${configSection.join('\n  ')}
scenarios:
  scenario:
    - say: hi from scenario
`);
    await expect(
      cli.parseAsync([...['node', '/path/to/cli'], ...['scripted', 'test-path']]),
    ).rejects.toBeDefined();

    expect(capturedOutput.errOut.map(stripAnsi)).toStrictEqual([expectedError]);
  });

  test.each([
    [
      {
        expectedError: '"region" is required\n',
        args: ['--deployment-id', 'xx'],
      },
    ],
    [
      {
        expectedError: '"deploymentId" is required\n',
        args: ['--region', 'xx'],
      },
    ],
  ])("Config from CLI args validation: '%s'", async ({ expectedError, args }) => {
    fsReadFileSync.mockReturnValue(`
scenarios:
  scenario:
    - say: hi from scenario
`);
    await expect(
      cli.parseAsync([...['node', '/path/to/cli'], 'scripted', ...args, 'test-path']),
    ).rejects.toBeDefined();

    expect(capturedOutput.errOut.map(stripAnsi)).toStrictEqual([expectedError]);
  });
});
