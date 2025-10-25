import fs from 'fs/promises';

const filePath = 'fs/files';
const fileCopyPath = filePath + '_copy';

const copy = async () => {
  try {
    await fs.access(fileCopyPath);
    throw new Error('FS operation failed'); //dest dir exists if we reach this line
  } catch (err) {
    if (err.code !== 'ENOENT') throw err; //consume dest dir does not exists, rethrow others
  }
  return fs
    .cp(filePath, fileCopyPath, {recursive: true, force: false, errorOnExist: true})
    .catch((err) => {
      if (err.code === 'ENOENT') throw new Error('FS operation failed'); //source dir does not exists
    });
};

await copy();
