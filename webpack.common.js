const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    // Set the single-spa config as the project entry point
    'app': './single-spa.config.js',
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // Webpack style loader added so we can use materialize
        test: /\.css$/,
        use: ['style-loader', 'css-loader','vue-style-loader'],
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
      }, {
        // This plugin will allow us to use AngularJS HTML templates
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: [
          'file-loader'
        ]
      },
      // {
      //   test: /\.(png|jpg|gif)$/i,
      //   use: [
      //     'url-loader',
      //   ]
      // },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
        
      }
    ],
    
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      'vue': 'vue/dist/vue.js',
      "~": path.resolve(__dirname),
      "~src": path.resolve(__dirname,'src'),
      "~assets": path.resolve(__dirname,'src/assets'),
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   template: './index.html'
    // }),
  ]
};