module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:react/recommended']
};
