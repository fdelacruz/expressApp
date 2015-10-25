var express = require('express'),
		bodyParser = require('body-parser'),
		app 	= express();

app.get('/', function (req, res) {

	res.format({
		'text/plain': function () {
			res.send('text response');
		},
		'text/html': function () {
			res.render('index.jade');
		},
		'application/json': function () {
			res.json({ topic: 'Express' });
		}
	});
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});
