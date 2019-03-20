const rulesConfig = require('./webpack.rules.config');
const devServer = require('./webpack.server.config');
const buildFiles = require('./webpack.build.files');

module.exports = {
	module: {
		rules: rulesConfig
	},

	plugins: buildFiles.Plugins(),

	entry: buildFiles.Entrypoints(),

	output: {
		filename: './bundles/[name].bundle.js',
        path: devServer.contentBase,
	},

	mode: 'production',

	devServer: devServer,

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
