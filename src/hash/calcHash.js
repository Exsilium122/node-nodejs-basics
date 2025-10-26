import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const filePath = 'hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
  const sha256 = createHash('sha256');
  const stream = createReadStream(filePath);
  stream.pipe(sha256);
  stream.on('end', () => {
    const hash = sha256.digest('hex');
    console.log(hash);
  });
};

await calculateHash();
