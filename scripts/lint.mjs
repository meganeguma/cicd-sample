import { createRequire } from 'module';
import { execSync } from 'child_process';

try {
  const require = createRequire(import.meta.url);
  require('@typescript-eslint/parser');
  require('@typescript-eslint/eslint-plugin');
} catch {
  console.log('Skipping lint: missing TypeScript ESLint dependencies');
  process.exit(0);
}

execSync('eslint "src/**/*.{ts,js}"', { stdio: 'inherit' });
