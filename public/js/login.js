function User(aEmail, aPass) {
    this.email = aEmail;
	this.password = aPass;
}

function AppViewModel() {
	this.emailField = ko.observable("check@check.com");
    this.passwordField = ko.observable("check");
	
	var user = new User(this.emailField, this.passwordField);
	
	self.login = function() {
		$.ajax("/api/login", {
            data: ko.toJSON(user),
            type: "post", contentType: "application/json",
            success: function(result) {
				if (typeof result.redirect == 'string') {
					window.location = result.redirect;
				}
				if (typeof result.error == 'string') {
					// show an error message
				}
				else
					// show another error message
			}
		});
	};
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());