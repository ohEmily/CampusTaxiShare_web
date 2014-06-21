var submitLogin = function(username, password) {
	Parse.User.logIn(username, password, {
		success: function(user) {
			// successful login --> dashboard
			$scope.$apply(function() {
				$location.path('/dashboard');
			});
		},
		error: function(user, error) {
			alert("Error message!");
		}
	});
};

$('#login-form').submit(function(event) {
	var name = $('#name-field').val();
	var pass = $('#pass-field').val();
	
	submitLogin(name, pass);
	
	event.preventDefault();
});