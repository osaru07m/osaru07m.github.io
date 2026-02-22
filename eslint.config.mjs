import next from 'eslint-config-next';

const config = [
  ...next,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];

export default config;
