/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: path.join(__dirname, 'js', 'routes.js'),
  output: {
    path: path.join(__dirname, 'js', 'build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'saas-loader'],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      /* {
        test: /\.(jpe?g|png|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }, */
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[hash].css',
    }),
    new BundleAnalyzerPlugin(),
  ],

  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'js'),
  },
};
