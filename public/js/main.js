$(document).ready(function() {
	// check if user is logged in. If not, redirect to login
	//if (!Parse.User.current()) {
		// redirect to home
	//	window.location = "/";
	//};
	
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
		//	Parse.User.logOut();
			// window.location = "/"; // redir to home
		}
	);
});