const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./index');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin()
    ]
});