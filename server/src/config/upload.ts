import path from 'path';
import multer from 'multer';
import crypto from 'crypto';
import { StorageEngine } from 'multer';

// -> import ex from '../../tmp' <- por isso passei o caminho dessa maneira
// no path resolver
const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

interface IUploadConfig {
  driver: 's3' | 'disk';

  tmpFolder: string;

  uploadsFolder: string;

  multer: {
    storage: StorageEngine;
  };

  config: {
    disk: {};
    aws: {
      bucket: string;
    };
  };
}

export const uploadConfig = {
  driver: process.env.STORAGE_DRIVER,

  tmpFolder,

  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('HEX');
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },

  config: {
    disk: {},
    aws: {
      bucket: 'nome-do-bucket-na-aws',
    },
  },
} as IUploadConfig;
