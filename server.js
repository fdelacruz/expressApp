var express = require('express'),
	bodyParser = require('body-parser'),
	app 	= express();

// GET     	- Read
// POST 	- Create
// PUT      - Update
// DELETE   - Delete

app.use(bodyParser.urlencoded({ extended: true })); // You have to explicitly set extended 'because option default will flip in next major'

var names = [];

app.get('/', function(req, res) {
	res.render('index.jade', { names: names });
});

app.post('/', function(req, res) {
	names.push(req.body.name);
	res.redirect('/');
});

app.listen(3000, function() {
	console.log('listening on port 3000');
});
