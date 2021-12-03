module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'no-param-reassign': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'no-shadow': 0,
  },
};
