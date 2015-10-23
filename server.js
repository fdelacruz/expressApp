var express = require('express'),
		bodyParser = require('body-parser'),
		app 	= express();

app.use(bodyParser.urlencoded({ extended: true }));

var names = [];

app.route('/')
		.all(function (req, res, next) {
			console.log('this logs on all VERBs:');
			next();
		})
		.get(function (req, res) {
			res.render('index.jade', { names: names });
		})
		.post(function (req, res) {
			names.push(req.body.name);
			res.redirect('/');
		});

app.listen(3000, function () {
	console.log('listening on port 3000');
});
