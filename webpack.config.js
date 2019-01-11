var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '*']
    }
};