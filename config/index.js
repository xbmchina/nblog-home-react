const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/root.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  }, module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
          // options: {
          //   modules: true, // 指定启用css modules
          //   localIdentName: '[name]_[local]_[hash:base64:5]' // 指定css的类名格式
          // }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  devServer: {
    host: '192.168.11.138',
    port: 9090,
    contentBase: './dist',
    historyApiFallback: true,//特别注意
    hot: true,
    proxy: {
      '/blog': {
        target: 'http://192.168.11.138:8092/',
        pathRewrite: { '^/blog': '' },
        // changeOrigin: true,     // target是域名的话，需要这个参数，
        secure: false,          // 设置支持https协议的代理
      }
    }
  }


};