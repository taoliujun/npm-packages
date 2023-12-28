const typescriptESLint = require('./typescript');
const { getExtends } = require('./util');

module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
    },
    env: {
        browser: true,
    },
    extends: getExtends('base'),

    settings: {
        ...typescriptESLint.settings, // additional settings
    },

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [require.resolve('./typescript')],
        },
    ],
};
