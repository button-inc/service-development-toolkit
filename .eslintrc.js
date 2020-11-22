module.exports = {
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  env: { es6: true, browser: true, node: true },
  plugins: ['jest'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    '@typescript-eslint/naming-convention': 0,
    'no-underscore-dangle': 0,
  },
  overrides: [],
};
