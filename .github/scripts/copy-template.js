import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const templatePath = join(__dirname, '..', '.gitmessage.txt');
const targetPath = process.argv[2];

const existingMessage = readFileSync(targetPath, 'utf-8');
const template = readFileSync(templatePath, 'utf-8');

const hasExistingMessage = existingMessage
  .split('\n')
  .some((line) => line.trim() && !line.startsWith('#'));

if (!hasExistingMessage) {
  writeFileSync(targetPath, template);
} else {
  const typeGuide = template.split('################').pop();
  writeFileSync(targetPath, `${existingMessage}\n${typeGuide}`);
}
