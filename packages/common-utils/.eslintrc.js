module.exports = {
    extends: ['@taoliujun/eslint-config/typescript'],
    env: {
        node: true,
    },
    parserOptions: { project: './tsconfig.eslint.json' },
    ignorePatterns: ['/*.js'],
    rules: {
        '@typescript-eslint/no-explicit-any': ['off'],
    },
    overrides: [
        {
            // 下列文件不用检查是否被引用
            files: ['./src/**/*'],
            rules: {
                'import/no-unused-modules': ['off'],
            },
        },
    ],
};
