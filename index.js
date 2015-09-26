import express from 'express';
import webpack from 'webpack';
import dev from 'webpack-dev-middleware';
import hot from 'webpack-hot-middleware';
import config from './dev.babel';

let app = express();
let compiler = webpack(config);

app.use(dev(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
})).use(hot(compiler));

app.use(express.static('./public'));

const port = process.env.PORT || 3000;

app.listen(port, 'localhost', err => {
	if (err) {
		return console.err(err);
	}
	console.log(`listening on http://localhost:${ port }`);
});
