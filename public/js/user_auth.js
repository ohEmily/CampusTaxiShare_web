var login = function(username, password) {
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
		
var submitLogin = function() {
	login($scope.user.username, $scope.user.password);
}
		
submitRegister = function() {
	var user = new Parse.User();
	user.set("username", $scope.user.email);
	user.set("password", $scope.user.password);
	user.set("personal_name", $scope.user.personal_name);
	user.set("email", $scope.user.email);
			
	user.signUp(null, 
	{
		success: function(user)
		{
			// Hooray! Let them use the app now.
			login($scope.user.email, $scope.user.password);
		},
		error: function(user, error)
		{
			// Show the error message somewhere and let the user try again.
			alert("Error: " + error.code + " " + error.message);
		}
	});
}

$(document).ready(function() {
	$('#login-form').submit(function(event) {
		alert('Handler for .submit() called.');
		event.preventDefault();
	});
};