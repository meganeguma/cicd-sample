import { existsSync } from 'fs';
import { execSync } from 'child_process';
const tsc = './node_modules/.bin/tsc';
if (existsSync(tsc)) {
  execSync(tsc, { stdio: 'inherit' });
} else {
  console.warn('TypeScript not installed, skipping build');
}
