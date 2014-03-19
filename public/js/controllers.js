'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('AppCtrl', function ($scope, $http)
	{
		/* Parse.initialize("Dvtzs3UXsAhPCdhDNfqTBLL2f6cUS7F4elPM29FT", "V2MMK6JjhuGW9YvZiJWbif1qm9MXx6d4r7jLLg68"); */
	
		$scope.showAbout = function()
		{
			$("#about_hover").show();
		};
		
		$scope.hideAbout = function()
		{
			$("#about_hover").hide();
		};
	}).
	
	controller('login', function ($scope, $location)
	{
		$scope.login = function()
		{
			Parse.User.logIn($scope.user.username, $scope.user.password,
			{
				success: function(user)
				{
					// Do stuff after successful login.
					$scope.$apply(function() 
					{
						$location.path('/dashboard');
					});
				},

				error: function(user, error)
				{
					alert("Error message!");
				}
			});
		}

	}).
	
	controller('register', function ($scope) 
	{
		$scope.register = function()
		{
			var user = new Parse.User();
			user.set("username", $scope.user.email);
			user.set("password", $scope.user.password);
			user.set("personal_name", $scope.user.personal_name);
			user.set("email", $scope.user.email);
			
			alert ("You typed: " + $scope.user.email);
			
			user.signUp(null, 
			{
				success: function(user)
				{
					// Hooray! Let them use the app now.
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
		$scope.showdata = function()
		{
			// alert("Logged in " + $scope.personal_name);
		}
		
		$scope.checklogin = function()
		{	
			var currentUser = Parse.User.current();
			if (currentUser)
			{
				// do stuff with the user
				$scope.personal_name = currentUser.get("personal_name"); 
				$scope.showdata();
			}
			else
			{
				// show the signup or login page
				(function() 
				{
					$location.path('/');
				})();
			}
		}() // called when the page is opened
				
		$scope.logout = function()
		{
			Parse.User.logOut();
			$scope.currentUser = null;
		};
	});