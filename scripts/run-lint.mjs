import { existsSync } from 'fs';
import { execSync } from 'child_process';

const eslintPath = './node_modules/.bin/eslint';
if (!existsSync(eslintPath)) {
  console.warn('ESLint not installed, skipping lint');
  process.exit(0);
}
try {
  execSync(`${eslintPath} "src/**/*.{ts,js}"`, { stdio: 'inherit' });
} catch (err) {
  process.exitCode = err.status || 1;
}
