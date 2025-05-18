const tsParser = await import('@typescript-eslint/parser').then(m => m.default ?? m).catch(() => null);
const tsPlugin = await import('@typescript-eslint/eslint-plugin').then(m => m.default ?? m).catch(() => null);

export default tsParser && tsPlugin
  ? [{
      files: ['src/**/*.{ts,js}'],
      languageOptions: {
        parser: tsParser,
        sourceType: 'module',
      },
      plugins: { '@typescript-eslint': tsPlugin },
      rules: {},
    }]
  : [{}];
