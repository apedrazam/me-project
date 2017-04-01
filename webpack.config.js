var path = require ('path')
var webpack = require ('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports ={
	entry: './js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: [['es2015'], ['react']]
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					"style-loader!css-loader"
				)
			},
			{
				test: /\.jpg$/,
				loader: "file-loader"
			}
		]
	},
	resolve: {
		extensions: ['.js', '.json'] 
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
};