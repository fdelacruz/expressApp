var express = require('express'),
		app 	= express();

app.param('name', function (req, res, next, name) {
	req.name = name[0].toUpperCase() + name.substring(1);
	next();
});

app.get('/name/:name', function (req, res) {
	res.send('Your name is ' + req.name);
});

app.listen(3000, function() {
	console.log('listening on port 3000');
});
