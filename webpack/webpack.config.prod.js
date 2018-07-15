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
      // './src/assets/global.scss',
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
    path: path.resolve(rootPath, 'build/dist'),
    publicPath: './',
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
        test: /\.(scss)$/,
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
        test: /\.(css)$/,
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
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/font-woff',
          name: '[name].[ext]',
        }
      }, 
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          mimetype: 'application/octet-stream',
          name: '[name].[ext]',
        }
      }, 
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        }
      }, 
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        // sourceMap: true // set to true if you want JS source maps
      }),
      // new OptimizeCSSAssetsPlugin({})
    ],
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

