import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';


const inFilePath = 'zip/files/archive.gz';
const outFilePath = 'zip/files/fileToCompress.txt';

const decompress = async () => {
  const inStream = createReadStream(inFilePath);
  const outStream = createWriteStream(outFilePath);
  inStream.pipe(createUnzip()).pipe(outStream);
};


await decompress();
