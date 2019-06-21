
const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const os = require("os");
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    host: os.networkInterfaces().en0[1].address,
    hot: true,
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/,
      options: {
        cssSourceMap: true
      }
    })
  ]
})