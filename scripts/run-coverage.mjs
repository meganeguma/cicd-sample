import { existsSync } from 'fs';
import { execSync } from 'child_process';
const c8Path = './node_modules/.bin/c8';
if (existsSync(c8Path)) {
  execSync(`${c8Path} --reporter=html npm test`, { stdio: 'inherit', shell: true });
} else {
  console.warn('c8 not installed, running tests without coverage');
  execSync('npm test', { stdio: 'inherit', shell: true });
}
