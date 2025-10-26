import fs from 'fs/promises';
import { exists, notExists } from './utils.js';


const filePath = 'fs/files/wrongFilename.txt';
const fileCorrectPath = 'fs/files/properFilename.md';

const rename = async () => {
  await exists(filePath);
  await notExists(fileCorrectPath);
  await fs.rename(filePath, fileCorrectPath);
};

await rename();
