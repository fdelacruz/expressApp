var express = require('express'),
		bodyParser = require('body-parser'),
		app 	= express(),
		APIv1 = require('./api1'),
		APIv2 = require('./api2');

app.use('/api/v1', APIv1);
app.use('/api/v2', APIv2);

app.listen(3000, function () {
	console.log('listening on port 3000');
});
