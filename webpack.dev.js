/**eslint disable */
const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
});
