var port = 3000;

/** Set up Express with module dependencies */
var express = require('express'),
	http = require('http'),
	Parse = require('parse').Parse;
	
var app = module.exports = express();

// this allows you to easily extract the JSON from HTTP requests
app.configure(function(){
	app.use(express.json());
	app.use(express.urlencoded());
});

// connection to database
Parse.initialize("Dvtzs3UXsAhPCdhDNfqTBLL2f6cUS7F4elPM29FT", 
	"V2MMK6JjhuGW9YvZiJWbif1qm9MXx6d4r7jLLg68");

/** Configuration */
// all environments
app.set('port', process.env.PORT || port);

/** Routes */
// serve all asset files from necessary directories
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/fonts", express.static(__dirname + "/public/fonts"));
app.use("/img", express.static(__dirname + "/public/img"));

// linking
require('./routes')(app, Parse); // sets up endpoints

/** Start Server */
http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});