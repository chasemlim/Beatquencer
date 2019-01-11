var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
    },
    resolve: {
        extensions: ['.js', '*']
    },
    mode: "development"
};