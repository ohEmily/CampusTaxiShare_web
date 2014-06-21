submitRegistration = function(name, email, pass) {
	var user = new Parse.User();
	user.set("personal_name", name);
	user.set("username", email);
	user.set("password", pass);
			
	user.signUp(null, 
	{
		success: function(user)
		{
			// Hooray! Let them use the app now.
			submitLogin(email, pass);
		},
		error: function(user, error)
		{
			// Show the error message somewhere and let the user try again.
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

$('#registration-form').submit(function(event) {
	var name = $('#name-field').val();
	var email = $('#email-field').val();
	var pass = $('#pass-field').val();
	
	submitRegistration(name, email, pass);
	
	event.preventDefault();
});