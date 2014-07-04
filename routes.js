/* This file is required by app.js. 
 * It sets up the application endpoints/routes.
 */

module.exports = function(app, Parse){
	
	var checkLogin = function(res) {
		if (!Parse.User.current()) {
			res.redirect('/');
		}
	};

	app.get('/login', function(req,res){
		res.render('index.ejs');
	});

	app.get('/register', function(req,res){
		res.render('register.ejs');
	});
	
	app.get('/dashboard', function(req,res){
		checkLogin(res);
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
		// http://stackoverflow.com/questions/14120847
		
		query.find({
			success: function(results) {
				var jsonArray = [];
				
				for (var i = 0; i < results.length; i++){
					jsonArray.push(JSON.stringify(results[i]));
					
				}
				res.send(jsonArray);
			}
		});
	});
	
	app.get('/api/trips/:user_id', function(req, res) {
		// req.params.user_id
	});
	
	app.post('/api/create_trip', function(req, res) {
		
		var Group = Parse.Object.extend("Group");
		var newGroup = new Group();
		newGroup.set("departure_time_date",	req.body.departure_time_date);
		newGroup.set("start_point", req.body.start_point);
		newGroup.set("end_point", req.body.end_point);
		newGroup.set("owner_email", "temp@test.com"); //Parse.User().getEmail());
		
		newGroup.save(null, {
			success: function() {
				res.send("New group successfully created.");
			},
			error: function() {
				res.send("We were unable to save your trip.");
			}
		});
	});
	
	// all others
	app.get('/*', function(req, res){
		res.redirect('/login');
	});
};
