let tsPlugin;
let parser;
try {
  tsPlugin = await import('@typescript-eslint/eslint-plugin').then(m => m.default || m);
  parser = (await import('@typescript-eslint/parser')).default;
} catch {
  console.warn('TypeScript ESLint plugin not installed, skipping lint');
  tsPlugin = null;
}
export default tsPlugin
  ? [
      {
        files: ['src/**/*.{ts,js}'],
        ignores: ['dist/**', 'public/**'],
        languageOptions: { parser, sourceType: 'module' },
        plugins: { '@typescript-eslint': tsPlugin },
        rules: {},
      },
    ]
  : [];
