import fs from 'fs/promises';
import { exists } from './utils.js';


const filePath = 'fs/files/fileToRead.txt';

const read = async () => {
  await exists(filePath);
  const text = await fs.readFile(filePath, 'utf-8');
  console.log(text);
  
};

await read();
