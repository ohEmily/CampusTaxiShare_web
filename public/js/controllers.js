'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('AppCtrl', function ($scope, $http)
	{
		// every time a new session starts, check if user is logged in. If not, redirect to login
		$scope.checklogin = function() {
			if (!Parse.User.current()) {
				(function() {
				// redirect to login page (not working)
				  $location.path('/');
				  $scope.$apply();
				})();
			}
		}(); // called when the page is opened
		
		$scope.showAbout = function()
		{
			$("#about_hover").show();
		};
		
		$scope.hideAbout = function()
		{
			$("#about_hover").hide();
		};
	}).
	
	controller('user_auth', function ($scope, $location)
	{
		var login = function(username, password) {
			Parse.User.logIn(username, password, {
				success: function(user) {
					// successful login --> dashboard
					$scope.$apply(function() {
						$location.path('/dashboard');
					});
				},
				error: function(user, error)
				{
					alert("Error message!");
				}
			});
		}
		
		$scope.submitLogin = function()
		{
			login($scope.user.username, $scope.user.password);
		}
		
		$scope.submitRegister = function()
		{
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
	}).
	
	
	controller('dashboard', function ($scope, $location)
	{
		$scope.createGroup = function()
		{
			// this comes later
		}
		
		$scope.logout = function()
		{
			Parse.User.logOut();
			$scope.currentUser = null;
		};
	});