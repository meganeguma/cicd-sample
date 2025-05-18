import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const c8 = './node_modules/.bin/c8';
if (existsSync(c8)) {
  spawnSync(c8, ['--reporter=html', 'npm', 'test'], { stdio: 'inherit' });
} else {
  console.warn('c8 not installed, running tests only');
  spawnSync('npm', ['test'], { stdio: 'inherit' });
}
