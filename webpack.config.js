const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	resolve: {
		modules: [
			path.join(__dirname, 'src'),
			'node_modules',
		],
		extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
	},
	entry: [
		// This needs to be loaded first for it to work in IE11 with react 15.4
		// https://github.com/facebook/react/issues/8379
		// 'babel-polyfill',

		// activate HMR for React
		'react-hot-loader/patch',

		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors

		// the entry point of our app
		'index.jsx',
	],
	output: {
		path: path.resolve(__dirname, 'dist'),

		filename: 'bundle.js',

		// necessary for HMR to know where to load the hot update chunks
		publicPath: '/',
	},

	context: path.resolve(__dirname, 'src'),

	devtool: 'inline-source-map',

	devServer: {
		// enable HMR on the server
		hot: true,

		// match the output path
		contentBase: path.resolve(__dirname, 'dist'),

		// Allow for HTML 5 navigation (single page nav without #)
		historyApiFallback: {
			rewrites: [
				{ from: /./, to: '/index.html' },
			],
		},

		publicPath: '/',

		public: 'http://localhost:8080',

		proxy: {
			'/customer-data-share': 'http://localhost:3100',
			'/aoenv': {
				target: 'http://www.testz.aoins.com',
				secure: false,
			},
		},
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					'babel-loader',
				],
				include: /src/,
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file-loader?name=[name].[ext]' },
		],
	},
	plugins: [
		// enable HMR globally
		new webpack.HotModuleReplacementPlugin(),

		// prints more readable module names in the browser console on HMR updates
		new webpack.NamedModulesPlugin(),

		new CopyWebpackPlugin([
			{ from: './index.html' },
		]),
		new ExtractTextPlugin('styles.css'),

		// Scope hoisting
		new webpack.optimize.ModuleConcatenationPlugin(),
	],
};
