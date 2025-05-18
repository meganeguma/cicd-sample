import fs from 'fs/promises';
import path from 'path';

async function main() {
  const src = await fs.readFile('src/main.ts', 'utf8');
  const lines = src.split('\n');
  const docLines = ['# API Documentation', ''];
  for (const line of lines) {
    const match = line.match(/^export function (\w+)/);
    if (match) {
      const name = match[1];
      docLines.push(`## ${name}()`);
      docLines.push('');
      docLines.push('Description TBD.');
      docLines.push('');
    }
  }
  await fs.mkdir('docs/api', { recursive: true });
  await fs.writeFile('docs/api/index.md', docLines.join('\n'));
}

main();
