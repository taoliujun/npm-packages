const { browser } = require('globals');
const { getExtends } = require('./util');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
    {
        languageOptions: {
            parser: require('@babel/eslint-parser'),
            parserOptions: {
                requireConfigFile: false,
            },
            globals: {
                ...browser,
            },
        },
    },
    ...getExtends('base'),
];
