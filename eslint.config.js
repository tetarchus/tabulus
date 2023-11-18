import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsx from 'eslint-plugin-react/configs/jsx-runtime.js';
import react from 'eslint-plugin-react/configs/recommended.js';
import sonar from 'eslint-plugin-sonarjs';
import unicornPlugin from 'eslint-plugin-unicorn';
import globals from 'globals';

const COGNITIVE_COMPLEXITY_MAX = 20;
const SWITCH_MAX_CASES = 10;
const DUPLICATE_STRING_MAX = 2;
const IDENTICAL_FUNC_MAX_LINES = 3;

const allLintableFiles = ['**/*.{js,jsx,mjs,cjs,ts,tsx}'];
const allIgnoredFiles = [
  '.vscode/**',
  '**/.cache/**',
  '**/build/**',
  '**/coverage/**',
  '**/dist/**',
  '**/node_modules/**',
  '**/public/build/**',
  'eslint.config.js',
];

const fileExtensionsMdx = ['.md', '.mdx'];
const fileExtensionsTypescript = ['.ts', '.tsx'];
const fileExtensionsJavascript = ['.js', '.jsx'];
const fileExtensionsAll = [
  ...fileExtensionsTypescript,
  ...fileExtensionsJavascript,
  ...fileExtensionsMdx,
];

const unusedIgnorePattern = '^_';
const warningComments = ['fixme', 'todo', 'xxx'];

const plugins = {
  '@typescript-eslint': typescriptPlugin,
  'react-hooks': reactHooksPlugin,
  'import': importPlugin,
  'sonarjs': sonar,
  'unicorn': unicornPlugin,
};

const tsconfigs = [
  'tsconfig.json',
  'apps/docs/tsconfig.json',
  'packages/tabulus/tsconfig.json',
  'packages/tabulus/tsconfig.node.json',
  'packages/tabulus/.storybook/tsconfig.json',
];

// Plugin settings
const settings = {
  'import/extensions': fileExtensionsAll,
  'import/external-module-folders': ['node_modules', 'node_modules/@types'],
  'import/ignore': ['(.*/)?node_modules', '\\.(css|md|svg|json)$'],
  'import/internal-regex': '^~\\/',
  'import/parsers': {
    '@typescript-eslint/parser': fileExtensionsTypescript,
  },
  'import/resolver': {
    node: {
      extensions: fileExtensionsAll,
    },
    typescript: {
      alwaysTryTypes: true,
      extensions: fileExtensionsTypescript,
      project: tsconfigs,
    },
  },
  'react': {
    version: 'detect',
  },
};

const eslintConfig = [
  { files: allLintableFiles, languageOptions: { globals: { ...globals.browser } } },
  { ignores: allIgnoredFiles },
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        extraFileExtension: 'json',
        project: tsconfigs,
        sourceType: 'module',
      },
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
  },
  { settings },
  { plugins },
  js.configs?.['recommended'],
  react,
  jsx,
  { rules: importPlugin.configs?.['recommended']?.rules },
  { rules: typescriptPlugin.configs?.['recommended']?.rules },
  { rules: unicornPlugin.configs?.['recommended']?.rules },
  {
    rules: {
      'capitalized-comments': [
        'warn',
        'always',
        {
          ignoreConsecutiveComments: true,
          ignoreInlineComments: false,
          // Ignore 'webpackChunkName' and file path comments
          ignorePattern: '^ ?webpackChunkName:',
        },
      ],
      'no-console': ['warn', { allow: ['error', 'info', 'warn'] }],
      'no-warning-comments': ['warn', { location: 'anywhere', terms: warningComments }],
      'require-unicode-regexp': 'error',
      '@typescript-eslint/no-shadow': [
        'error',
        {
          // JSX is changing to require importing. name is deprecated and common. status is deprecated and common. URL we prefer importing.
          allow: ['JSX', 'name', 'status', 'URL'],
          builtinGlobals: true,
          hoist: 'all',
          ignoreOnInitialization: false,
          ignoreFunctionTypeParameterNameValueShadow: false,
          ignoreTypeValueShadow: true,
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: unusedIgnorePattern,
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: unusedIgnorePattern,
          destructuredArrayIgnorePattern: unusedIgnorePattern,
          ignoreRestSiblings: true,
          vars: 'all',
          varsIgnorePattern: unusedIgnorePattern,
        },
      ],
      'import/no-unresolved': ['error', { amd: false, commonjs: false }],
      'import/order': [
        'error',
        {
          'alphabetize': { caseInsensitive: true, order: 'asc' },
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
            'unknown',
          ],
          'newlines-between': 'always-and-inside-groups',
          'warnOnUnassignedImports': true,
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'sonarjs/no-all-duplicated-branches': 'error',
      'sonarjs/no-element-overwrite': 'error',
      'sonarjs/no-empty-collection': 'error',
      'sonarjs/no-extra-arguments': 'error',
      'sonarjs/no-identical-conditions': 'error',
      'sonarjs/no-identical-expressions': 'error',
      'sonarjs/no-ignored-return': 'error',
      'sonarjs/no-one-iteration-loop': 'error',
      'sonarjs/no-use-of-empty-return-value': 'error',
      'sonarjs/non-existent-operator': 'error',
      // TODO: Move to error once existing fns are sorted
      'sonarjs/cognitive-complexity': ['warn', COGNITIVE_COMPLEXITY_MAX],
      'sonarjs/elseif-without-else': 'error',
      'sonarjs/max-switch-cases': ['error', SWITCH_MAX_CASES],
      'sonarjs/no-collapsible-if': 'error',
      'sonarjs/no-collection-size-mischeck': 'error',
      'sonarjs/no-duplicate-string': [
        'error',
        { ignoreStrings: '', threshold: DUPLICATE_STRING_MAX },
      ],
      'sonarjs/no-duplicated-branches': 'error',
      'sonarjs/no-gratuitous-expressions': 'error',
      'sonarjs/no-identical-functions': ['error', IDENTICAL_FUNC_MAX_LINES],
      'sonarjs/no-inverted-boolean-check': 'error',
      'sonarjs/no-nested-switch': 'error',
      'sonarjs/no-nested-template-literals': 'error',
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-redundant-jump': 'error',
      'sonarjs/no-same-line-conditional': 'error',
      'sonarjs/no-small-switch': 'error',
      'sonarjs/no-unused-collection': 'error',
      'sonarjs/no-useless-catch': 'error',
      'sonarjs/prefer-immediate-return': 'error',
      'sonarjs/prefer-object-literal': 'error',
      'sonarjs/prefer-single-boolean-return': 'error',
      'sonarjs/prefer-while': 'error',
      'unicorn/expiring-todo-comments': [
        'error',
        {
          allowWarningComments: true,
          ignore: [],
          ignoreDatesOnPullRequests: false,
          terms: warningComments,
        },
      ],
      'unicorn/filename-case': [
        'error',
        { cases: { camelCase: true, kebabCase: false, pascalCase: false, snakeCase: false } },
      ],
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-null': 'off',
      'unicorn/number-literal-case': 'off',
      'unicorn/numeric-separators-style': [
        'error',
        {
          binary: {
            groupLength: 4,
            minimumDigits: 0,
          },
          hexadecimal: {
            groupLength: 2,
            minimumDigits: 4,
          },
          number: {
            groupLength: 3,
            minimumDigits: 5,
          },
          octal: {
            groupLength: 4,
            minimumDigits: 0,
          },
          onlyIfContainsSeparator: false,
        },
      ],
      // No option to ignore, and we only do this to improve type inferrence anyway
      'unicorn/prefer-native-coercion-functions': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            args: true,
            Args: true,
            argTypesRegex: true,
            DevTool: true,
            docs: true,
            e: true,
            env: true,
            i: true,
            minutesForNoShow: true,
            minutesForNoShowServer: true,
            noOptionsMessage: true,
            ObjT: true,
            Param: true,
            params: true,
            Props: true,
            ref: true,
            Ref: true,
            rel: true,
            requireNoSession: true,
          },
          checkShorthandProperties: true,
          checkFilenames: true,
          checkProperties: true,
          checkVariables: true,
          replacements: { no: { number: true } },
        },
      ],
      // FIXME: Off until https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1926#issuecomment-1781448516 is fixed
      'unicorn/text-encoding-identifier-case': 'off',
      // Only want braces if variables are defined.
      'unicorn/switch-case-braces': ['error', 'avoid'],
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'unicorn/filename-case': [
        'error',
        // FIXME: pascalCase current wants all parts to be capitalized (including 'stories' and 'tests')
        // The 'ignore' can be removed once the below PR is merged
        // https://github.com/sindresorhus/eslint-plugin-unicorn/pull/2186
        {
          cases: { camelCase: false, kebabCase: false, pascalCase: true, snakeCase: false },
          ignore: ['stories\\.tsx$', 'test\\.tsx$'],
        },
      ],
    },
  },
  {
    files: ['**/*.config.*'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];

export default eslintConfig;
