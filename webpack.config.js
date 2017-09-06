'use strict';
const path = require('path');
const webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = [{
  entry: './src/Scroll/Scroll.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'reactAwesomeScroll.js',
    library: 'ReactAwesomeScroll',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['stage-2', 'react'],
        },
      }
    }],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    }
  },
  // plugins: [
  //   new UglifyJSPlugin(),
  // ],
  // devtool: 'source-map',
}];