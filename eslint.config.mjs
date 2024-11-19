import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['node_modules', 'dist'],
    rules: {
      'no-console': 'warn', // Warns when console.log is used
      'no-unused-vars': 'error', // Prevents declaration of unused variables
      'no-extra-semi': 'error', // Disallows unnecessary semicolons
      'prefer-const': 'error', // Suggest using `const` when variables are not reassigned
    },
  },
];
