/*eslint-disable */
const HtmlWebpackPlugIn = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const IsDevMode = process.env.NODE_ENV.trim() !== 'production';

// Use the contenthash if the mode is set to production...
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: `styles/${IsDevMode ? '[name].css' : '[name].[contenthash].css'}`,
  chunkFilename: `styles/${IsDevMode ? '[id].css' : '[id].[contenthash].css'}`,
});

// Use for css optimization...
const optimizeCssAssetsPlugin = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: require('cssnano'),
  cssProcessorPluginOptions: {
    preset: ['default', { discardComments: { removeAll: true } }],
  },
  canPrint: true,
});

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
  plugins: [
    miniCssExtractPlugin,
    optimizeCssAssetsPlugin,
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugIn({ template: 'src/index.html' }),
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
};
