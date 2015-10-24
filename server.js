var express = require('express'),
		bodyParser = require('body-parser'),
		app 	= express();

// Router Object
// - use
// - param
// - verb / all
// - route

var router = express.Router();

router.use(function (req, res, next) {
	console.log('router specific middleware');
	next();
});

router.get('/', function (req, res) {
	res.send('router home route');
});

router.route('/test').get(function (req, res) {
	res.send('router test route');
});

app.use('/api', router);

app.listen(3000, function () {
	console.log('listening on port 3000');
});
