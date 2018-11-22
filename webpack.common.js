/*eslint-disable */
const HtmlWebpackPlugIn = require('html-webpack-plugin');
const ExtractTextWebpack = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractPlugIn = new ExtractTextWebpack({
  filename: 'src/css/[name].[contentHash].css',
  allChunks: true,
});

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-3'],
            plugins: ['transform-object-rest-spread'],
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: extractPlugIn.extract({
          use: ['css-loader', 'sass-loader', 'style-loader'],
        }),
      },
    ],
  },
  plugins: [
    extractPlugIn,
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugIn({
      template: 'src/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
