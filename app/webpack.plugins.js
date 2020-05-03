const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const DotEnvPlugin = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = [
	new MiniCssExtractPlugin({
		filename: devMode ? "[name].css" : "[name].[hash].css",
		chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
	}),
	new ForkTsCheckerWebpackPlugin({
		async: false,
		useTypescriptIncrementalApi: true
	}),
	new HtmlWebpackPlugin({
		title: "Blog",
		filename: "index.html",
		template: "src/index.html"
	}),
	new ErrorOverlayPlugin(),
	new DotEnvPlugin(),
	new HardSourceWebpackPlugin()
];
