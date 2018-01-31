const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname + '/build');
const APP_DIR = path.resolve(__dirname + '/app');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: APP_DIR,
      loader: 'babel-loader',
      query: {
        presets: ['es2015','es2016','react']
      }
    }]
  }

}

module.exports = config;
