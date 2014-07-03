/* This file is required by app.js. 
 * It sets up the application endpoints/routes.
 */

module.exports = function(app, Parse){

	app.get('/login', function(req,res){
		res.render('index.ejs');
	});
	
	app.get('/register', function(req,res){
		res.render('register.ejs');
	});
	
	app.get('/dashboard', function(req,res){
		res.render('dashboard.ejs');
		
		
	});
	
	// user management-related routes
	app.post('/api/login', function(req, res){
		
		Parse.User.logIn(req.body.email, req.body.password, {
			success: function(user) {
				res.send( {redirect: '/dashboard' } );
			},
			error: function(user, error) {
				res.send( {error: 'Username and password combination does not exist.'} );
			}
		});
	});
	
	app.post('/api/register', function(req,res){
		
		var user = new Parse.User();
		user.set("personal_name", req.body.personal_name);
		user.set("username", req.body.email);
		user.set("password", req.body.password);
			
		user.signUp(null, 
		{
			success: function(user)
			{
				Parse.User.logIn(req.body.email, req.body.password);
				res.send( {redirect: '/dashboard' } );
			},
			error: function(user, error) {
				res.send( {error: 'An account with this email already exists.'} );
			}
		});
	});
	
	app.get('/api/logout', function(req, res){
		Parse.User.logOut();
	});
	
	// trip-related routes
	app.get('/api/trips', function(req, res) {
		var Group = Parse.Object.extend("Group");
		var query = new Parse.Query(Group);
		
		query.find({
			success: function(results) {
				// Do something with the returned Parse.Object values
				res.send(results);
			}
			/*
			for (var i = 0; i < results.length; i++) { 
				var thisGroup = results[i];
				$("#new-trips-table > tbody:last").append('<tr>' 
					+ '<td>' + thisGroup.get("owner").id + '</td>' 
					+ '<td>' + thisGroup.get("departure_time_date")  + '</td>'
					+ '<td>' + "hi" + '</td>' //  results.get("start_point")
					+ '<td>' + "hi" + '</td>' // results.get("end_point")
					+ '</tr>');
				}
			},
			error: function(error) {
				alert("Error: " + error.code + " " + error.message);
			}
			*/
		});
	});
	
	app.get('/api/trips/:user_id', function(req, res){
		// req.params.user_id
	});
	
	app.get('/api/create_trip', function(req, res){
	
	});
	
	// all others
	app.get('/*', function(req, res){
		res.redirect('/login');
	});
};
