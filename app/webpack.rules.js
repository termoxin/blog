const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
	{
		test: /\.(sa|sc|c)ss$/,
		use: [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					hmr: process.env.NODE_ENV === "development"
				}
			},
			"css-loader",
			"postcss-loader"
		]
	},
	{
		test: /\.tsx?$/,
		exclude: /(node_modules|dist)/,
		loaders: [
			"cache-loader",
			{
				loader: "ts-loader",
				options: {
					transpileOnly: true,
					experimentalWatchApi: true,
					happyPackMode: true
				}
			}
		]
	},
	{
		test: /\.(png|jpg|gif)$/i,
		use: [
			{
				loader: "url-loader",
				options: {
					limit: 8192
				}
			}
		]
	}
];
