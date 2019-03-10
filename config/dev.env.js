 const merge = require('webpack-merge');
 const common = require('./index');

 module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   }
 });