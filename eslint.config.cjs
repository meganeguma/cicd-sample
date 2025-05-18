module.exports = [
  {
    files: ['**/*.{ts,js}'],
    ignores: ['dist/**', 'public/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
    },
  }
];
