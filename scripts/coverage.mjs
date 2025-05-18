import { createRequire } from 'module';
import { execSync } from 'child_process';

try {
  const require = createRequire(import.meta.url);
  require.resolve('c8');
  execSync('c8 --reporter=html npm run test', { stdio: 'inherit' });
} catch {
  console.log('c8 not found, running tests');
  execSync('npm test', { stdio: 'inherit' });
}
