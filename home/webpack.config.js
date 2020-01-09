const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'home': './home.app.tsx',
    'store': './src/store/index.ts'
  },
  output: {
    libraryTarget: 'amd',
    publicPath: '/static/home-frontend/assets',
    filename: '[name].js',
    path: path.resolve(__dirname, 'static/home-frontend/assets'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      }, {
        test: /\.tsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: ['ts-loader'],
      }
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
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.resolve(__dirname, 'static/portal-frontend/assets')
    })
  ],
  devtool: 'source-map',
  externals: []
};
