import { createReadStream } from 'node:fs';

const filePath = 'streams/files/fileToRead.txt';

const read = async () => {
  const stream = createReadStream(filePath);
  stream.pipe(process.stdout);
};

await read();
