var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './bundle.js',
    },
    resolve: {
        extensions: ['.js', '*']
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.(s*)css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
};