const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: `${path.resolve(__dirname, 'src')}/index.jsx`,
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
	},
	devServer: {
		contentBase: './dist',
		proxy: {
			'/customer-data-share': 'http://localhost:3000',
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/index.html' },
		]),
		new ExtractTextPlugin('styles.css'),
	],
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: `${path.resolve(__dirname, 'src')}`,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader'],
				}),
			},
		],
	},
};

module.exports = config;
