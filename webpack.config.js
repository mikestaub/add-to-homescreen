const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'index.min.js'
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
};