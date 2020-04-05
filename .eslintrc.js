const ERROR = 2;

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
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],

  plugins: ['react', 'react-hooks', 'flowtype', 'prettier'],

  globals: {},

  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },

  rules: {
    // es6
    'func-names': [ERROR, 'never'],
    'no-await-in-loop': ERROR,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'break' },
      { blankLine: 'always', prev: '*', next: 'continue' },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'block' },
    ],
    'lines-around-comment': [
      ERROR,
      {
        beforeBlockComment: true,
      },
    ],
    'class-methods-use-this': 0,
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'no-underscore-dangle': 0,
    // See https://github.com/babel/babel-eslint/issues/278
    // and https://github.com/eslint/eslint/pull/7436
    'arrow-parens': 0,
    'prefer-destructuring': 0,
    quotes: ['error', 'single', 'avoid-escape'],
    camelcase: 0,
    'no-magic-numbers': [
      'error',
      {
        enforceConst: true,
        ignoreArrayIndexes: true,
        ignore: [0, 1, -1, 2],
      },
    ],
    'no-restricted-globals': 0,

    // imports
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,

    // spacing
    'no-multiple-empty-lines': [ERROR, { max: 1, maxEOF: 0, maxBOF: 0 }],

    // code arrangement matters
    'no-use-before-define': [ERROR, { functions: false }],

    // make it meaningful
    'prefer-const': 1,

    // keep it simple
    complexity: 0,

    // Flow will handle this
    'no-unused-expressions': 'off',

    // prettier
    'prettier/prettier': ['error'],

    // react
    'react/prefer-es6-class': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': 0,
    'react/sort-comp': [
      ERROR,
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
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Flow
    'flowtype/no-unused-expressions': 'error',
  },

  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
        extensions: ['.js', '.jsx'],
      },
    },
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
