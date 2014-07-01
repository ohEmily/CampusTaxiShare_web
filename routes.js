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
	
	app.get('/*', function(req, res){
		res.redirect('/login');
	});
	
	// database-related routes
	/* 
	app.get('/api/login', function(req, res){
	
	});
	
	app.get('api/register', function(req,res){
	
	});
	*/
	app.get('/api/trips', function(req, res){
	
	});
	
	app.get('/api/:user_id', function(req, res){
	
	});
	
	app.get('api/create_trip', function(req, res){
	
	});
};
