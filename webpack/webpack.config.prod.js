const webpack = require('webpack');
const path = require('path');

const rootPath = path.resolve(__dirname, '..');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  mode: 'production',

  context: rootPath,

  entry: {
    main: [
      './src/index.js',
    ],
    vendor: [
      'jquery',
      'popper.js',
      'bootstrap',
    ],
  },

  output: {
    filename: '[name].js',
  },

  module: {

    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: "[name]_[local]_[hash:base64:5]"
            }
          },
          {
            loader: 'postcss-loader',
            // options: {}
          },
          {
            loader: 'sass-loader',
            // options: {}
          },
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            // options: {}
          }
        ]
      },
      {
        test: /\.(svg)$/,
        loader: 'url-loader',
        options: {}
      },
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  resolve: {
    modules: [ 'src', 'node_modules' ],
    extensions: ['.js', '.jsx'],
  },

  plugins: [

    new MiniCssExtractPlugin({
      filename: '[name].css',
      // chunkFilename: "[id].css"
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),

    new HtmlWebpackPlugin({
      template: path.join(rootPath, './src/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body'
    }),
  ],

  // Hides "Entrypoint size exeeds the recommened limit (250kB)" warnings.
  performance:{
    hints: false
  },
};

