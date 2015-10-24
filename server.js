var express = require('express'),
		bodyParser = require('body-parser'),
		app 	= express();

app.get('/', function (req, res) {
	
	req.params.ATTR;
	req.query.ATTR;
	req.body.ATTR;

	req.param.('ATTR'); // chech in order: params, body. and then query..

	req.route;
	req.originalUrl;

	req.cookies.ATTR;
	req.get(); // any header name
	req.accepts('text/html'); // application/json, text/plain

	// Complete list of Request Objects:
	// http://expressjs.com/4x/api.html#req	

});

app.listen(3000, function () {
	console.log('listening on port 3000');
});
