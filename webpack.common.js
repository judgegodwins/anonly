const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx')
  },

  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
      images: path.resolve(__dirname, 'src/images'),
      screens: path.resolve(__dirname, 'src/screens'),
      components: path.resolve(__dirname, 'src/components'),
      config: path.resolve(__dirname, 'src/config.ts'),
      store: path.resolve(__dirname, 'src/store.ts'),
      svg: path.resolve(__dirname, 'src/svg'),
      types: path.resolve(__dirname, 'src/types'),
      slices: path.resolve(__dirname, 'src/slices'),
      services: path.resolve(__dirname, 'src/services'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      helpers: path.resolve(__dirname, 'src/helpers')
    },
    extensions: [ '.tsx', '.ts', '.js', '.jsx', '.scss', '.css', '.jpg', '.png' ]
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  },

  plugins: [
    new Dotenv({
      systemvars: true
    }),

    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'Anonly',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public'), to: '' }]
    })
  ]
}