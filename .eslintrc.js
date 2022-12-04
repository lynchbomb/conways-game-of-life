module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['import', 'prettier', 'filenames'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:import/recommended',
  ],
  rules: {
    curly: 'error',
    'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'import/named': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'es5',
      },
      {
        usePrettierrc: false,
      },
    ]
  },
  ignorePatterns: ['dist', 'node_modules', 'fixtures', '*.config.*'],
};
