import fs, { accessSync } from 'node:fs';
import commander from 'commander';

export function writableDirValidator(fsAccessSync: typeof accessSync) {
  return function (directoryPath: string): string {
    try {
      fsAccessSync(directoryPath, fs.constants.W_OK);
    } catch {
      throw new commander.InvalidOptionArgumentError(
        `Directory '${directoryPath}' is not writable`,
      );
    }
    return directoryPath;
  };
}
