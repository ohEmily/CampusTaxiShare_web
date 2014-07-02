// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function User(aEmail, aPass) {
    this.email = aEmail;
	this.pass = aPass;
}

function AppViewModel() {
	this.emailField = ko.observable("test@test.com");
    this.passwordField = ko.observable("test again");
	
	var user = new User(this.emailField, this.passwordField);
	
	self.login = function() {
		$.ajax("/api/login", {
            data: ko.toJSON(user),
            type: "post", contentType: "application/json",
            success: function(result) { alert(result) }
		});
		
		alert(ko.toJSON(user));
	};
	
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

/*	
$('#login-form').submit(function(event) {
	var name = $('#name-field').val();
	var pass = $('#pass-field').val();
	
	submitLogin(name, pass);
	
	event.preventDefault();
});
*/

var submitLogin = function(username, password) {
	/*
	Parse.User.logIn(username, password, {
		success: function(user) {
			// successful login --> dashboard
			// window.location = "/dashboard";
		},
		error: function(user, error) {
			alert("Error message!");
		}
	});
	*/
};