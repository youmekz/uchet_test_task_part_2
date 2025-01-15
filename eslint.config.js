import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';
import parser from '@vue/eslint-parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      parser,
      globals: globals.browser,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginVue.configs['flat/essential'].rules,
      'prettier/prettier': ['error'],
    },
  },
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error'],
    },
  },
  {
    rules: {
      ...configPrettier.rules,
    },
  },
];
