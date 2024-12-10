import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';

import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config} */
export default {
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,ts,tsx}'], // Added `tsx` for React TypeScript support
      languageOptions: {
        globals: globals.browser,
        parser: tseslintParser, // Use TypeScript parser
      },
      plugins: {
        prettier: pluginPrettier,
        '@typescript-eslint': tseslint,
      },
      extends: [
        pluginJs.configs.recommended,
        tseslint.configs.recommended,
        'plugin:prettier/recommended', // Includes eslint-plugin-prettier and eslint-config-prettier
      ],
      rules: {
        'prettier/prettier': 'error', // Prettier issues as ESLint errors
        'no-console': 'warn', // Example additional rule
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
      },
      settings: {
        'import/resolver': {
          typescript: {}, // Ensures TypeScript paths are resolved
        },
      },
    },
  ],
};
