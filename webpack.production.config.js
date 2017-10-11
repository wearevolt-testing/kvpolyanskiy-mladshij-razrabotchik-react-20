'use strict';

const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.jsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
	},
	resolve: {
		root: [
			path.resolve(__dirname, "src"),
		],
		extensions: ['', '.js', '.jsx', '.css']
	},
	output: {
		path: path.join(__dirname, '/public/'),
		filename: '[name].js',
		publicPath: '/'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel'
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.tpl.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
}
