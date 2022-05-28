/**
 * return eslint extends
 * @param {'base'|'typescript'|'react'} input
 */
function getExtends(input) {
    const out = ['airbnb-base', require.resolve('./rules')];

    if (input === 'typescript') {
        out.push('plugin:@typescript-eslint/recommended');
    } else if (input === 'react') {
        out.push('plugin:react/recommended', 'plugin:react/jsx-runtime');
    }

    out.push('plugin:prettier/recommended');

    return out;
}

module.exports = {
    getExtends,
};
