var path = require ('path')
var webpack = require ('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
	entry: './app/index.js',
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
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
          			use: "css-loader"
				})
			},
			{
				test: /\.(jpe?g|png|gif|svg|pdf)$/i,
				loaders: [
					'file-loader?name=[path][name].[ext]'
					//'file-loader?hash=sha512&digest=hex&name=[path]/[hash].[ext]',
					//'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
  }
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
	stats: {
		colors: true
	},
	devtool: 'source-map'
};