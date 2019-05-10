const rulesConfig = require('./webpack.rules.config');
const devServerConfig = require('./webpack.server.config');
const buildFiles = require('./webpack.build.files.index');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	module: {
		rules: rulesConfig
	},

	plugins: buildFiles.Plugins(),

	entry: buildFiles.Entrypoints(),

	output: {
		filename: './bundles/[name].bundle.js',
        path: devServerConfig.devServer.contentBase,
	},

	mode: 'production',

	devServer: devServerConfig.devServer,

	optimization: {
        // minimizer: [new UglifyJsPlugin()],
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
            },
			chunks: 'all', // 'async',
			minChunks: 1,
			minSize: 30000,
			name: 'custom-common'
		}
	}
};
