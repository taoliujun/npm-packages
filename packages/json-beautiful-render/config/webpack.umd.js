module.exports = {
    mode: 'production',
    target: 'web',
    entry: './lib/esm/index.js',
    output: {
        filename: 'index.js',
        path: `${__dirname}/../lib/umd`,
        library: {
            type: 'umd',
        },
    },
    // optimization: {
    //     minimize: false,
    // },
};
