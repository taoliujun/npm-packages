/**
 * return eslint extends
 * @param {'base'|'typescript'|'react'} input
 */
function getExtends(input) {
    const out = [
        // TODO need
        // 'airbnb-base',
        require('eslint-config-airbnb-base'),
        // TODO need
        // require.resolve('./rules'),
    ];

    if (input === 'typescript') {
        // TODO need
        // out.push('plugin:@typescript-eslint/recommended');
    } else if (input === 'react') {
        // TODO need
        // out.push('plugin:react/recommended', 'plugin:react/jsx-runtime');
    }

    // TODO need
    // out.push('plugin:prettier/recommended');

    return out;
}

module.exports = {
    getExtends,
};
