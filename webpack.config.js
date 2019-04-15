const rulesConfig = require('./webpack.rules.config');
const devServerConfig = require('./webpack.server.config');
const buildFiles = require('./webpack.build.files.index');

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
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
