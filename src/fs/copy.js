import fs from 'fs/promises';

const filePath = 'fs/files';
const fileCopyPath = filePath + '_copy';

const copy = async () => {
  try {
    await fs.mkdir(fileCopyPath, {recursive: false});
    await fs.cp(filePath, fileCopyPath, {recursive: true, force: false, errorOnExist: true})
  } catch (err) {
    if (err.code === 'EEXIST') throw new Error('FS operation failed'); //destination dir exists
    if (err.code === 'ENOENT') {
      await fs.rmdir(fileCopyPath); //it was created while checking for existence
      throw new Error('FS operation failed'); //source dir does not exists
    }
  }
};
await copy();
