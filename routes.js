/* This file is required by app.js. 
 * It sets up the application endpoints/routes.
 */

module.exports = function(app){

	app.get('/login', function(req,res){
		res.render('index.ejs');
	});
	
	app.get('/register', function(req,res){
		res.render('register.ejs');
	});
	
	app.get('/dashboard', function(req,res){
		res.render('dashboard.ejs');
	});
	
	// database-related routes
	app.get('/api/login', function(req, res){
		res.send();
	});
	
	app.get('api/register', function(req,res){
	
	});
	
	app.get('/api/trips', function(req, res){
		res.send('hello, world!');
	});
	
	app.get('/api/trips/:user_id', function(req, res){
		// req.params.user_id
	});
	
	app.get('api/create_trip', function(req, res){
	
	});
	
	app.get('api/logout', function(req, res){
		Parse.User.logOut();
	});
	
	// all others
	app.get('/*', function(req, res){
		res.redirect('/login');
	});
};
