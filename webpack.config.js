const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  mode: /* isProduction ? 'production' : */'development',
  entry: path.join(__dirname, 'routes.js'),
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: 'bundle.[hash].js',
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
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
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

    }),
    new CopyPlugin ([
      {from: './styles/typography/icofont', to: '/bundle/styles/typography/icofont'}
    ]),
  ],

  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'js'),
    hot: true,
    watchContentBase: true,
    historyApiFallback: true,
  },
};
