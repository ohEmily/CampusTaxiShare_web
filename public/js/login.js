function User(aEmail, aPass) {
    this.email = aEmail;
	this.password = aPass;
}

function AppViewModel() {
	this.emailField = ko.observable("test@test.com");
    this.passwordField = ko.observable("test again");
	
	var user = new User(this.emailField, this.passwordField);
	
	self.login = function() {
		$.ajax("/api/login", {
            data: ko.toJSON(user),
            type: "post", contentType: "application/json",
            success: function(result) {
				alert(result);
			}
		});
	};
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());