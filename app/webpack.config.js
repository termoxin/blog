const path = require("path");
const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		hot: true,
		port: 7001
	},
	resolve: {
		extensions: [".js", ".ts", ".jsx", ".tsx", ".css"]
	},
	plugins,
	devtool: "cheap-module-source-map"
};
