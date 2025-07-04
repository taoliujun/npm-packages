module.exports = {
    extends: ['@taoliujun/eslint-config'],
    overrides: [
        {
            // page store components are temporarily unused
            files: ['./packages/*/src/index.ts'],
            rules: {
                'import/no-unused-modules': ['off'],
                'import/no-default-export': ['off'],
            },
        },
        {
            files: ['./packages/eslint9/*.js'],
            rules: {
                'import/no-unused-modules': ['off'],
                'import/no-default-export': ['off'],
            },
        },
        {
            files: ['./packages/common-utils/src/**/*.ts'],
            rules: {
                'import/no-unused-modules': ['off'],
            },
        },
    ],
};
