$(document).ready(function() {
	Parse.initialize("Dvtzs3UXsAhPCdhDNfqTBLL2f6cUS7F4elPM29FT", 
		"V2MMK6JjhuGW9YvZiJWbif1qm9MXx6d4r7jLLg68");
	
	personal_name = Parse.User.current().get("personal_name");

	// check if user is logged in. If not, redirect to login
	(function() {
		if (!Parse.User.current()) {
			// redirect to login page (not working)
			
		}
	})();
	
	// show about text on hover
	$('#about-text').hover(
		function () {
			$('#about_hover').show();
		},
		function () {
			$('#about_hover').hide();
		}
	);
			
	var logout = function()
	{
		Parse.User.logOut();
	};
});