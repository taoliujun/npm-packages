module.exports = {
    // base rules
    rules: {
        'arrow-body-style': ['error', 'always'],

        // max lines allowed
        'max-lines': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
        'max-lines-per-function': ['warn', { max: 100, skipBlankLines: true, skipComments: true }],

        // ignore this check in class
        'class-methods-use-this': ['off'],

        // import ignore resolving asset files
        'import/no-unresolved': [
            'error',
            {
                caseSensitive: true,
                ignore: ['.png$', '.jpe?g$', '.gif$', '.webp$', '.md$'],
            },
        ],
        // import js(x), ts(x) files without extension
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                mjs: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        // prefer named export
        // why?:
        // named export is more friendly when you want to search for
        // all usages of a class or a function, it works better when
        // we want to refactor code with a large project
        'import/prefer-default-export': ['off'],
        'import/no-default-export': ['error'],

        // unused exports
        'import/no-unused-modules': [
            'error',
            {
                unusedExports: true,
            },
        ],
    },
};
