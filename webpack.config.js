var path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')



const config = {
    plugins: [
        new CopyWebpackPlugin([{
            from: 'path/to/file.txt',
            to: 'file/without/extension',
            toType: 'file'
        }, ])
    ]
}

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
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: 'resolve-url-loader', options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
            }, {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader?name=[name].[ext]' // <-- retain original file name
            }]
        }]
    }
};