/* This file is required by app.js. 
 * It sets up the application endpoints/routes.
 */

module.exports = function(app){

	// specific chat room request
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
};
