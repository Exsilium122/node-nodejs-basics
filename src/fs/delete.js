import fs from 'fs/promises';
import { exists } from './utils.js';


const filePath = 'fs/files/fileToRemove.txt';

const remove = async () => {
  await exists(filePath);
  await fs.unlink(filePath);
};

await remove();
