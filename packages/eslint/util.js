/**
 * return eslint extends
 * @param {'base'|'typescript'|'react'} input
 */
function getExtends(input) {
    const out = ['airbnb-base'];

    if (input === 'typescript') {
        out.push('plugin:@typescript-eslint/recommended');
    }

    out.push('prettier', require.resolve('./rules'));

    return out;
}

module.exports = {
    getExtends,
};
