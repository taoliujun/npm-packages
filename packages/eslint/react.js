const { getExtends } = require('./util');

module.exports = {
    extends: [require.resolve('./base'), ...getExtends('react')],
    plugins: ['react-hooks'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // jsx may reference to styles which defined later (react-native pattern)
        'no-use-before-define': ['error', { variables: false }],

        // prefer syntax (shorthand) mode for fragments
        'react/jsx-fragments': ['error', 'syntax'],

        // enforce self closed tags
        'react/self-closing-comp': ['error'],

        // react-hooks
        'react-hooks/rules-of-hooks': ['error'],
        'react-hooks/exhaustive-deps': ['error'],
    },

    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [require.resolve('./typescript')],
            rules: {
                // prop-types checked by tsc in compile time
                'react/prop-types': 'off',
                // use ts version no-use-before-define
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
            },
        },
    ],
};
