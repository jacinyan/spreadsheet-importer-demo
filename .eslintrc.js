module.exports = {
  env: {
    // window object etc part of browser are made available globally.
    browser: true,
    es6: true,
    commonjs: true,
    node: true,
  },
  /*
   * The order of extending each plugin matters a LOT!!
   * Thus don't change order of items in this array
   * unless you're sure of it.
   */
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  // babel-eslint is deprecated now. This is the latest package.
  parser: '@babel/eslint-parser',
  plugins: ['react', 'import', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
