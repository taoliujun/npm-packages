const { getExtends } = require('./util');

module.exports = {
    extends: getExtends('typescript'),
    plugins: ['deprecation'],
    parserOptions: { sourceType: 'module', project: './tsconfig.json' },
    settings: {
        // Append 'ts' extensions to Airbnb 'import/resolver' setting
        'import/resolver': {
            node: {
                extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
            },
            // for deprecation plugin
            typescript: {
                alwaysTryTypes: true,
            },
        },
        // Append 'ts' extensions to Airbnb 'import/extensions' setting
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],

        // use typescript parser for ts, tsx import
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
    rules: {
        // deprecation
        'deprecation/deprecation': 'warn',

        // switch to typescript version rules
        // camelcase
        camelcase: 'off',
        // array type
        '@typescript-eslint/array-type': ['error'],

        // enforce import type
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                disallowTypeAnnotations: false,
            },
        ],

        // enforce export type
        '@typescript-eslint/consistent-type-exports': ['error'],

        // no-unused-vars
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],

        // no-unused-expressions
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error'],

        // no-useless-constructor
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],

        // no-shadow
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],

        // TypeScript compilation already ensures that named imports exist in the referenced module
        'import/named': 'off',
    },
};

try {
    // check if typescript installed
    require.resolve('typescript');
} catch (e) {
    // disable typescript related config if current project doesn't use typescript
    module.exports = {};
}
