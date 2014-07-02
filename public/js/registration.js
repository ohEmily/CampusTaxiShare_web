function NewUser(aName, aEmail, aPass) {
    this.personal_name = aName;
	this.email = aEmail;
	this.password = aPass;
}

function AppViewModel() {
	this.nameField = ko.observable("Joe");
	this.emailField = ko.observable("test@test.com");
	this.passwordField = ko.observable("test");
	
	var user = new NewUser(this.nameField, this.emailField, this.passwordField);
	
	self.register = function() {
		$.ajax("/api/register", {
            data: ko.toJSON(user),
            type: "post", contentType: "application/json",
            success: function(result) {
				alert(result);
			}
		});
	};
};

// Activates knockout.js
ko.applyBindings(new AppViewModel());