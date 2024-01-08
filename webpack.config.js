const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
          test: /\.js$/, // Handle JavaScript/JSX files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/, // Handle CSS files
          use: ['style-loader', 'css-loader'],
        },
      ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // specify the content base directory
    },
    hot: true,
    port: 3000,
    open: true,
  },
};