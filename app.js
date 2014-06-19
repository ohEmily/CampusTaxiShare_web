var port = 3000;

/** Set up Express with module dependencies */
var express = require('express'),
	http = require('http');
	
var app = module.exports = express();


/** Configuration */
// all environments
app.set('port', process.env.PORT || port);

/** Routes */
// serve all asset files from necessary directories
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/partials", express.static(__dirname + "/public/partials"));
app.use("/img", express.static(__dirname + "/public/img"));

// linking
require('./routes')(app); // sets up endpoints

/** Start Server */
http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});