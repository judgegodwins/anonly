const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src', 'index.tsx')
  },

  resolve: {
    // alias: {
    //   Styles: path.resolve(__dirname, 'src/styles'),
    //   Images: path.resolve(__dirname, 'src/images'),
    //   Screens: path.resolve(__dirname, 'src/screens'),
    //   Components: path.resolve(__dirname, 'src/components')
    // },
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
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'Anonly',
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}