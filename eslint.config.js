import js from '@eslint/js';
// import importPlugin from 'eslint-plugin-import';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import unicornPlugin from 'eslint-plugin-unicorn';
import globals from 'globals';

/** @type { import('eslint').Linter.Config[] } */
export default [
  {
    ignores: [
      '.github/**/*.*',
      '.idea/**/*.*',
      '.vscode/**/*.*',
      'build/**/*.*',
      'coverage/**/*.*',
      'dist/**/*.*',
      'public/**/*.*',
      'types/**/*.*',
      'node_modules/**/*.*',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      // import: importPlugin,
      jsdoc: jsdocPlugin,
      unicorn: unicornPlugin,
    },
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
      'import/resolver': {
        node: true,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...jsdocPlugin.configs['flat/recommended'].rules,
      // ...importPlugin.configs.recommended.rules,
      ...unicornPlugin.configs['flat/recommended'].rules,
      'unicorn/filename-case': 'off',
      'unicorn/no-null': 'warn',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-dom-node-append': 'warn',
      'unicorn/prefer-query-selector': 'warn',
      'no-unused-vars': 'off',
      'prefer-arrow-callback': 'warn',
      'prefer-template': 'warn',
      // 'import/extensions': ['warn', 'always'],
      'jsdoc/require-jsdoc': [
        'warn',
        {
          require: {
            FunctionDeclaration: true,
            MethodDefinition: true,
            ClassDeclaration: false,
            ArrowFunctionExpression: false,
            FunctionExpression: false,
          },
        },
      ],
      'jsdoc/check-indentation': 1,
      'jsdoc/check-line-alignment': 1,
      'jsdoc/check-syntax': 1,
      'jsdoc/require-asterisk-prefix': 1,
      'jsdoc/require-description': 1,
      'jsdoc/require-description-complete-sentence': 1,
      'jsdoc/require-hyphen-before-param-description': 1,
      'jsdoc/require-throws': 1,
      'jsdoc/sort-tags': 1,
      'jsdoc/no-undefined-types': 0,
    },
  },
];
