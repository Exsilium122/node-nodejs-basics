import fs from 'fs';

const filePath = 'fs/files/fresh.txt';

const create = async () => {
  fs.writeFile(filePath, 'I am fresh and young', {flag: 'wx'}, (err) => {
    if (err?.code === 'EEXIST') {
      throw new Error('FS operation failed');
    }
    return;
  });
};

await create();
