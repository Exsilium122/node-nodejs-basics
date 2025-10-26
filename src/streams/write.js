import { createWriteStream } from 'node:fs';

const filePath = 'streams/files/fileToWrite.txt';

const write = async () => {
  const stream = createWriteStream(filePath);
  process.stdin.pipe(stream);
};

await write();
