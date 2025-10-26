import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';


const inFilePath = 'zip/files/fileToCompress.txt';
const outFilePath = 'zip/files/archive.gz';

const compress = async () => {
  const inStream = createReadStream(inFilePath);
  const outStream = createWriteStream(outFilePath);
  inStream.pipe(createGzip()).pipe(outStream);
};

await compress();
