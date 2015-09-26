import { optimize as oz } from 'webpack';
import path from 'path';

export default {
	entry: './src',
	output: {
		path: path.join(__dirname, 'public/lib'),
		filename: 'bundle.js'
	},
	plugins: [
		new oz.DedupePlugin(),
		new oz.OccurenceOrderPlugin(),
		new oz.UglifyJsPlugin({
			compressor: { screw_ie8: true, warnings: false }
		}),
		new oz.AggressiveMergingPlugin()
	],
	module: {
		loaders: [{ test: /\.js$/, loader: 'babel-loader' }]
	}
};
