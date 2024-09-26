module.exports = {
  extends: [require.resolve('js2me-eslint-config/react')],
  settings: {
    'import/resolver': {
      typescript: {
        project: require.resolve('./tsconfig.json'),
      },
    },
  },
  rules: {},
  overrides: [
    {
      files: ['api-codegen/*.js', 'api-codegen/*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
