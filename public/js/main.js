// general app-level js

var personal_name = Parse.User.current().get("personal_name");

// every time a new session starts, check if user is logged in. If not, redirect to login
(var checklogin = function() {
	if (!Parse.User.current()) {
		// redirect to login page (not working)
		$scope.$apply();
	}
})();	
var showAbout = function()
{
	$("#about_hover").show();
};
		
var hideAbout = function()
{
	$("#about_hover").hide();
};
		
var logout = function()
{
	Parse.User.logOut();
};