module.exports = {
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  env: { es6: true, browser: true, node: true },
  plugins: ['jest'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {},
  overrides: [],
};
