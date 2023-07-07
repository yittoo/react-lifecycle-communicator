module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    // 'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/semi': ['warn', 'always'],
    'quote-props': [1, 'as-needed'],
    '@typescript-eslint/no-non-null-assertion': 0,
    'eol-last': ['error', 'always'],
    'no-useless-escape': 0,
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/ban-ts-ignore': 0,
    'react/react-in-jsx-scope': 0,
    'no-restricted-imports': [
      'error',
      {
        name: 'date-fns',
        message: 'Import specific function from date-fns instead of all of them.'
      },
      {
        name: '@nextui-org/react',
        importNames: ['useTheme'],
        message: 'Import from "next-themes" instead.'
      }
    ],
    'key-spacing': ['error'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'keyword-spacing': ['error'],
    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      ignoreMemberSort: false
    }],
    quotes: ['error', 'single', { avoidEscape: true }],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'block-like'], next: ['return', 'block-like']
      },
      {
        blankLine: 'always',
        prev: 'block-like', next: 'block-like'
      },
    ],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true },
      ImportDeclaration: { multiline: true, consistent: true },
      ExportDeclaration: { multiline: true, consistent: true }
    }],
    'no-return-assign': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'max-len': ['error', {
      code: 130,
      ignoreRegExpLiterals: true,
      tabWidth: 2,
      ignoreUrls: true,
      ignorePattern: '<Path .*|<Polyline .*|<Polygon .*|<G .*|<path .*|<polyline .*|<polygon .*|<g .*'
    }],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxBOF: 0,
      maxEOF: 1
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce', 'ternary'] }],
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }]
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.js', '**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-empty-interface': 0,
        'no-case-declarations': 0,
        'react/display-name': 0,
      },
      parserOptions: {
        sourceType: 'module',
      },
    }
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    __dirname: 'readonly',
    process: 'readonly',
    module: 'readonly',
    require: 'readonly',
    exports: 'writable'
  },
};
