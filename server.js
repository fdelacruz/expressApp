var express = require('express'),
		bodyParser = require('body-parser'),
		app 	= express();

app.get('/', function (req, res) {

	res.status(200);
	res.set(header, value); // to set any header
	res.get(header);

	res.cookie(name, value);
	res.clearCookie(name);

	res.redirect(status, path);
	res.send(status, text);
	res.json(status, object);
	res.jsonp(status, object); // wraps object in a callback({})
	res.download(file);

	res.render(file, properties, function (err, html) {
		res.send(200, html);	
	});

	// Complete list of Response Objects
	// http://expressjs.com/4x/api.html#res
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});
