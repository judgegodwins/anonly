const { merge } = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    open: true,
    port: 3000,
    static: './dist',
    hot: true,
    historyApiFallback: true,
    compress: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})