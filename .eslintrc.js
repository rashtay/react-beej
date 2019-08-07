module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },

  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],

  globals: {
    __DEV__: true,
  },

  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },

  plugins: ['import', 'react', 'flowtype', 'prettier'],

  rules: {
    // es6
    'func-names': [2, 'never'],
    'no-await-in-loop': 2,
    'no-magic-numbers': 2,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'break' },
      { blankLine: 'always', prev: '*', next: 'continue' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'always', prev: 'block', next: 'block' },
      { blankLine: 'always', prev: 'block-like', next: 'block-like' },
    ],
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
      },
    ],
    'class-methods-use-this': 0,
    'no-console': ['error', { allow: ['warn', 'info', 'table'] }],
    'no-underscore-dangle': 0,
    // See https://github.com/babel/babel-eslint/issues/278
    // and https://github.com/eslint/eslint/pull/7436
    'arrow-parens': 0,
    'prefer-destructuring': 0,
    quotes: ['error', 'single', 'avoid-escape'],
    camelcase: 0,
    'no-magic-numbers': 0,
    'no-restricted-globals': 0,

    // imports
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,

    // spacing
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],

    // code arrangement matters
    'no-use-before-define': [2, { functions: false }],

    // make it meaningful
    'prefer-const': 1,

    // keep it simple
    complexity: 0,

    // prettier
    'prettier/prettier': ['error'],

    // react
    'react/no-array-index-key': 0,
    'react/prefer-es6-class': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/sort-comp': [
      2,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
  },

  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
