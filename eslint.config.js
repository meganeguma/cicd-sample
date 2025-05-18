let plugin;
let parser;
try {
  plugin = (await import('@typescript-eslint/eslint-plugin')).default;
  parser = (await import('@typescript-eslint/parser')).default;
} catch {
  console.warn('TS ESLint deps missing');
}

export default [
  {
    files: ['src/**/*.{ts,js}'],
    ...(parser ? { languageOptions: { parser, parserOptions: { sourceType: 'module' } } } : {}),
    plugins: plugin ? { '@typescript-eslint': plugin } : {},
    rules: {},
  },
];
