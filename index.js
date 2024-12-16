/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 160,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 120,
        trailingComma: 'none',
        proseWrap: 'preserve',
        parser: 'markdown',
        singleQuote: false,
        embeddedLanguageFormatting: 'off',
      },
    },
    {
      files: '*.{prettierrc}',
      options: {
        parser: 'json',
      },
    },
  ],
};

export default config;
