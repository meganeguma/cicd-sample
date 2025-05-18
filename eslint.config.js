let eslintPluginTs;
let parserTs;
try {
  eslintPluginTs = (await import('@typescript-eslint/eslint-plugin')).default;
  parserTs = (await import('@typescript-eslint/parser')).default;
} catch {
  eslintPluginTs = {};
  parserTs = undefined;
}

const config = parserTs
  ? [
      {
        files: ['src/**/*.{ts,js}'],
        languageOptions: {
          parser: parserTs,
        },
        plugins: {
          '@typescript-eslint': eslintPluginTs,
        },
        rules: {},
      },
    ]
  : [];

export default config;
