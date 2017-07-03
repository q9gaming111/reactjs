var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		exp1: './bt1/main.js',
		exp2: './bt2/main.js'
	},
	output: {
		path: path.resolve(__dirname, 'output'),
		filename: '[name].js',
		publicPath: '/output/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/, 
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}