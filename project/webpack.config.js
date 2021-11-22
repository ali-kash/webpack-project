const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

let mode = 'development'

const plugins = [new MiniCssExtractPlugin(), new Dotenv()]

if (process.env.NODE_ENV === 'production') {
	mode = 'production'
}

module.exports = {
	mode: mode,

	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	plugins: plugins,

	devtool: 'source-map',

	devServer: {
		static: './dist',
		hot: true,
	},
}
