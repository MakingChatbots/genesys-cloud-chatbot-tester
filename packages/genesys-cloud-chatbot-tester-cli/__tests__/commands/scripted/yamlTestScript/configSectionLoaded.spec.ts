import { describe, vi, beforeEach, test, expect, MockedFunction, Mocked } from 'vitest';
import { ScriptedTestCommandDependencies } from '../../../../src/commands/scriptedTest/createScriptedTestCommand';
import { readFileSync } from 'node:fs';
import { Command } from 'commander';
import { createCli } from '../../../../src/createCli';
import { ReorderedMessageDelayer } from '@makingchatbots/genesys-cloud-chatbot-tester';

describe('Session Config', () => {
  let fsReadFileSync: MockedFunction<typeof readFileSync>;

  let reorderedMessageDelayer: Mocked<Pick<ReorderedMessageDelayer, 'delay' | 'add' | 'on'>>;
  let reorderedMessageDelayerFactory: Mocked<
    ScriptedTestCommandDependencies['reorderedMessageDelayerFactory']
  >;
  let webMessengerSessionFactory: Mocked<
    ScriptedTestCommandDependencies['webMessengerSessionFactory']
  >;
  let conversationFactory: Mocked<ScriptedTestCommandDependencies['conversationFactory']>;

  let cli: Command;

  beforeEach(() => {
    fsReadFileSync = vi.fn();

    reorderedMessageDelayer = { delay: 0, add: vi.fn(), on: vi.fn() };
    reorderedMessageDelayerFactory = vi.fn().mockReturnValue(reorderedMessageDelayer);

    const webMessengerSession = { on: vi.fn(), close: vi.fn() };
    webMessengerSessionFactory = vi.fn().mockReturnValue(webMessengerSession);

    const conversation = { waitForConversationToStart: vi.fn(), sendText: vi.fn() };
    conversationFactory = vi.fn().mockReturnValue(conversation);

    const cliCommand = new Command().exitOverride(() => {
      throw new Error('CLI Command errored');
    });

    const scenarioTestCommand = new Command().exitOverride(() => {
      throw new Error('Scenario Test Command errored');
    });

    cli = createCli(cliCommand, {
      command: scenarioTestCommand,
      fsReadFileSync: fsReadFileSync as unknown as typeof import('node:fs').readFileSync,
      fsAccessSync: vi.fn(),
      reorderedMessageDelayerFactory,
      webMessengerSessionFactory,
      conversationFactory,
    });
  });

  test('session config arguments take priority over config in Test Script', async () => {
    fsReadFileSync.mockReturnValue(`
config:
  deploymentId: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  region: xxxx.pure.cloud
scenarios:
  exampleName:
    - say: "hi"
`);

    await cli.parseAsync([
      ...['node', '/path/to/cli'],
      'scripted',
      ...['--deployment-id', 'test-deployment-id'],
      ...['--region', 'test-region'],
      ...['--origin', 'test-origin'],
      ...['/test/path'],
    ]);

    expect(webMessengerSessionFactory).toHaveBeenCalledWith(
      {
        deploymentId: 'test-deployment-id',
        region: 'test-region',
        origin: 'test-origin',
      },
      reorderedMessageDelayer,
    );
  });

  test('Test-Script session config not necessary if session config args provided', async () => {
    fsReadFileSync.mockReturnValue(`
scenarios:
  exampleName:
    - say: "hi"
`);

    await cli.parseAsync([
      ...['node', '/path/to/cli'],
      'scripted',
      ...['--deployment-id', 'test-deployment-id-2'],
      ...['--region', 'test-region-2'],
      ...['--origin', 'test-origin-2'],
      ...['/test/path'],
    ]);

    expect(webMessengerSessionFactory).toHaveBeenCalledWith(
      {
        deploymentId: 'test-deployment-id-2',
        region: 'test-region-2',
        origin: 'test-origin-2',
      },
      reorderedMessageDelayer,
    );
  });

  test('Test-Script session config used if session config args not provided', async () => {
    fsReadFileSync.mockReturnValue(`
config:
  deploymentId: test-deployment-id-3
  region: test-region-3
  origin: test-origin-3
scenarios:
  exampleName:
    - say: "hi"
`);

    await cli.parseAsync([...['node', '/path/to/cli'], ...['scripted', '/test/path']]);

    expect(webMessengerSessionFactory).toHaveBeenCalledWith(
      {
        deploymentId: 'test-deployment-id-3',
        region: 'test-region-3',
        origin: 'test-origin-3',
      },
      reorderedMessageDelayer,
    );
  });
});
