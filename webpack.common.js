/*eslint-disable */
const HtmlWebpackPlugIn = require('html-webpack-plugin');
const ExtractTextWebpack = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV.trim() !== 'production';

// const extractPlugIn = new ExtractTextWebpack({
//   filename: devMode ? 'src/css/[name].css' : 'src/css/[name].[contenthash].css',
//   allChunks: true,
// });

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
  plugins: [
    // extractPlugIn,
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugIn({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      // Use the hashing of content file depending on the environtment...
      filename: `styles/${devMode ? '[name].css' : '[name].[contenthash].css'}`,
      chunkFilename: `styles/${
        devMode ? '[id].css' : '[id].[contenthash].css'
      }`,
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all', // Include all the file in the optimization
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          //   name(module) {
          //     // get the name. E.g. node_modules/packageName/not/this/part.js
          //     // or node_modules/packageName
          //     const packageName = module.context.match(
          //       /[\\/]node_modules[\\/](.*?)([\\/]|$)/
          //     )[1];

          //     // npm package names are URL-safe, but some servers don't like @ symbols
          //     return `npm.${packageName.replace('@', '')}`;
          //   },
        },
        styles: {
          name: 'styles',
          test: /\.(sc|c)ss$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
};
