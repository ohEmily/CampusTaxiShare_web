'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('AppCtrl', function ($scope, $http)
	{
		Parse.initialize("Dvtzs3UXsAhPCdhDNfqTBLL2f6cUS7F4elPM29FT", "V2MMK6JjhuGW9YvZiJWbif1qm9MXx6d4r7jLLg68");
		
		$scope.logOut = function(form)
		{
			Parse.User.logOut();
			$scope.currentUser = null;
		};
	}).
	
	controller('home', function ($scope, $location)
	{
		$scope.login = function()
		{
			Parse.User.logIn($scope.user.username, $scope.user.password, {
				success: function(user)
				{
					// Do stuff after successful login.
					//alert("Login success!");
					$location.path('/register');
				},

				error: function(user, error)
				{
					alert("Error!");
				}
			});
		}

	}).

/**
	controller('login', function ($scope)
	{
		$scope.login = function()
		{
			Parse.User.logIn($scope.user.username, $scope.user.password, {
				success: function(user)
				{
					// Do stuff after successful login.
					alert("Login success!");
				},

				error: function(user, error)
				{
					alert("Error in login!");
				}
			});
		}

	}).
*/
	
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
			
			user.signUp(null, {
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
	
	
	controller('mydata', function ($scope)
	{
		$scope.showdata = function()
		{
			var currentUser = Parse.User.current();
			if (currentUser)
			{
				// do stuff with the user
				alert("hello " + currentUser.personal_name);
			}
			else
			{
				// show the signup or login page
			}
		}
	});