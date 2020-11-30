module.exports = {
  root: true,
  extends: ['@react-native-community'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 125,
      },
    ],
    'comma-dangle': [2, 'always-multiline'],
  },
  plugins: ['prettier'],
};
