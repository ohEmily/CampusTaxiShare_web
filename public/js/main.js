$(document).ready(function() {
	personal_name = Parse.User.current().get("personal_name");

	// check if user is logged in. If not, redirect to login
	(function() {
		if (!Parse.User.current()) {
			// redirect to login page (not working)
			
		}
	})();
	
	('#about-text').hover(
		function () {
			alert("show!");
			$('#about_hover').show();
		},
		function () {
			alert("hide!");
			$('#about_hover').hide();
		}
	);
	
			
	var logout = function()
	{
		Parse.User.logOut();
	};
});