import fs from 'fs/promises';
import { exists } from './utils.js';


const filePath = 'fs/files';

const list = async () => {
  await exists(filePath);
  const files = await fs.readdir(filePath);
  console.log(files);
};

await list();
