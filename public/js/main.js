$(document).ready(function() {
	Parse.initialize("Dvtzs3UXsAhPCdhDNfqTBLL2f6cUS7F4elPM29FT", 
		"V2MMK6JjhuGW9YvZiJWbif1qm9MXx6d4r7jLLg68");
	
	// check if user is logged in. If not, redirect to login
	if (!Parse.User.current()) {
		// redirect to home
		window.location = "/";
	};
	
	// show about text on hover
	$('#about-text').hover(
		function () {
			$('#about_hover').show();
		},
		function () {
			$('#about_hover').hide();
		}
	);
	
	$('#logout-link').click(
		function() {
			Parse.User.logOut();
			window.location = "/"; // redir to home
		}
	);
});