module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
    },
    env: {
        browser: true,
    },
    extends: ['airbnb-base'],
};
