import w, { optimize as oz } from 'webpack';
import path from 'path';

export default {
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		'./src'
	],
	output: {
		path: path.join(__dirname, 'public/lib'),
		filename: 'bundle.js',
		publicPath: '/lib'
	},
	plugins: [
		new w.HotModuleReplacementPlugin(),
		new oz.DedupePlugin(),
		new oz.OccurenceOrderPlugin()
	],
	module: {
		loaders: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }]
	}
};
