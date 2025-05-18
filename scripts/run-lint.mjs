import { createRequire } from 'module';
import { execFileSync } from 'child_process';

try {
  createRequire(import.meta.url)('@typescript-eslint/eslint-plugin');
} catch {
  console.log('Skipping lint: missing @typescript-eslint/eslint-plugin');
  process.exit(0);
}

execFileSync('npx', ['eslint', '"src/**/*.{ts,js}"'], { stdio: 'inherit', shell: true });
