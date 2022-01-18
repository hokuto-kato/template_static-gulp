import TerserPlugin from "terser-webpack-plugin";

module.exports = {
	mode: "production",
	entry: "./src/js/app.js",
	output: {
		path: `${__dirname}/build/js`,
		filename: "app.js"
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: false,
				terserOptions: {
					output: {
						comments: false
					},
					compress: {
						drop_console: true
					}
				}
			})
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [["@babel/preset-env", { modules: false }]]
						}
					}
				]
			}
		]
	}
};
