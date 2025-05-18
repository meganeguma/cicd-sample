import { createRequire } from 'module';
import { execFileSync } from 'child_process';

let c8;
try {
  c8 = createRequire(import.meta.url)('c8/bin/c8.js');
} catch {
  console.log('c8 not found, running tests only');
  execFileSync('npm', ['test'], { stdio: 'inherit' });
  process.exit(0);
}

execFileSync('node', [c8, '--reporter=html', 'npm', 'run', 'test'], { stdio: 'inherit' });
