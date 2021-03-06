const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // Set the single-spa config as the project entry point
    'config': './single-spa.config.js',
  },
  output: {
    publicPath: '/static/portal-frontend/assets',
    filename: '[name].js',
    path: path.resolve(__dirname, 'static/portal-frontend/assets'),
  },
  module: {
    rules: [
       {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      }, {
        test: /\.tsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'ts-loader',
      }
      // , {
      //   // This plugin will allow us to use AngularJS HTML templates
      //   test: /\.html$/,
      //   exclude: /node_modules/,
      //   loader: 'html-loader',
      // },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.ts', '.tsx', '.js']

  },
  plugins: [
    // A webpack plugin to remove/clean the output folder before building
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, './importmap.json') },
    ]),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.resolve(__dirname, 'static/portal-frontend/assets')
   })
  ],
  devtool: 'source-map',
  externals: []
};
