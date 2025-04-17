// eslint.config.js
const js = require('@eslint/js');

module.exports = [
  js.recommended,
  {
    files: ['*.js', '*.jsx'],
    rules: {},
    languageOptions: {
      globals: {
        browser: true,
        node: true,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
];