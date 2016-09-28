var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
	entry: APP_DIR + '/index.tsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
	},
  
	module : {
		loaders : [
			{ 
				test: /\.tsx?$/,
				include : APP_DIR,
				loader: "ts-loader"
			}
		],
		preLoaders: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ 
				test: /\.js$/, 
				loader: "source-map-loader"
			}
		]
	}
};

module.exports = config;