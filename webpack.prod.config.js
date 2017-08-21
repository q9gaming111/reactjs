const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    './bt4/main'
  ],

  output: {
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js',
    publicPath: '/output/'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/, 
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  }
}