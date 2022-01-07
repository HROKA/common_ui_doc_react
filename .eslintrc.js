module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaVersion: 2018,
    jsx: false,
  },
  plugins: ['prettier', 'react'],
  rules: {
    'linebreak-style': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
  },
};
