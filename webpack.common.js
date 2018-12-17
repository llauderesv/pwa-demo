/*eslint-disable */
const path = require('path');
const HtmlWebpackPlugIn = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const IsDevMode = process.env.NODE_ENV.trim() !== 'production';

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: `styles/${IsDevMode ? '[name].css' : '[name].[contenthash].css'}`,
  chunkFilename: `styles/${IsDevMode ? '[id].css' : '[id].[contenthash].css'}`,
});

// CSS optimization and minification...
const optimizeCssAssetsPlugin = new OptimizeCssAssetsPlugin({});
const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);
const htmlWebpackPlugIn = new HtmlWebpackPlugIn({ template: 'src/index.html' });

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.jsx'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    miniCssExtractPlugin,
    optimizeCssAssetsPlugin,
    cleanWebpackPlugin,
    htmlWebpackPlugIn,
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // Include all the file in the optimization
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
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
        test: /\.(sc|c)ss$/,
        use: [
          IsDevMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
    ],
  },
};
