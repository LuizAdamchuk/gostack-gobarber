import fs from 'fs';
import path from 'path';
import { uploadConfig } from '@config/upload';

import { IStoragedProvider } from '@shared/container/providers/StorageProviders/models/IStorageProvider';

export class DiskStorageProvider implements IStoragedProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}
