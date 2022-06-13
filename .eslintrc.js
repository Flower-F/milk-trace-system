module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/react-in-jsx-scope': [
      0,
    ],
    'no-shadow': [
      0,
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      2,
    ],
    'react/function-component-definition': [
      0,
    ],
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: true,
      },
    ],
  },
};
