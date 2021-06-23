const path = require('path');

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'js', 'main.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: path.resolve(__dirname, 'src', 'css')
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		]
	}
}