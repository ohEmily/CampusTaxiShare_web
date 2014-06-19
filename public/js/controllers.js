'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
	controller('AppCtrl', function ($scope, $http)
	{
		$scope.personal_name = Parse.User.current().get("personal_name");
		

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
		
		$scope.logout = function()
		{
			Parse.User.logOut();
			$scope.currentUser = null;
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
		// future feature: show groups created by this user
		// https://www.parse.com/docs/relations_guide
		
		// populate table
		(function() {
			//alert("dashboard");
			
			var Group = Parse.Object.extend("Group");
			var query = new Parse.Query(Group);
			query.find({
				success: function(results) {
					// Do something with the returned Parse.Object values
					for (var i = 0; i < results.length; i++) { 
						var thisGroup = results[i];
						$("#new-trips-table > tbody:last").append('<tr>' 
							+ '<td>' + thisGroup.get("owner").id + '</td>' 
							+ '<td>' + thisGroup.get("departure_time_date")  + '</td>'
							+ '<td>' + "hi" + '</td>' //  results.get("start_point")
							+ '<td>' + "hi" + '</td>' // results.get("end_point")
							+ '</tr>');
					}
				},
				error: function(error) {
					alert("Error: " + error.code + " " + error.message);
				}
			});
			
		})();
	}).
	
	controller('create', function ($scope, $location)
	{
		// populate group
		(function() {
			var location = Parse.Object.extend("Location");
			var query = new Parse.Query(location);
			query.find({
				success: function(results) {
					// Do something with the returned Parse.Object values
					for (var i = 0; i < results.length; i++) { 
						$(".locationPick").append(new 
							Option(results[i].get("locationName"), 
							results[i].get("locationId")));
					}
				},
				error: function(error) {
					alert("Error: " + error.code + " " + error.message);
				}
			});
			
			$(".chosen-select").chosen();
		})();
		
		
		$scope.submitGroup = function()
		{
			/** Returns the Location object with the name passed as needle. */
			var getLocationName = function(needle) 
			{
				// https://parse.com/docs/js_guide#objects-retrieving
				var Location = Parse.Object.extend("Location");
				var query = new Parse.Query(Location);
				query.equalTo("locationId", needle);
				query.find(
				{
					success: function(found_object) {
						return found_object.id;
					},
					error: function(error) {
						alert("Error: " + error.code + " " + error.message);
						return null;
					}
				});
			};
		
			// TODO: check for length of values entered
			
			// https://parse.com/docs/js_guide#objects-saving
			var Group = Parse.Object.extend("Group");
			var newGroup = new Group();
			
			newGroup.set("owner", Parse.User.current());
			newGroup.set("departure_time_date", $scope.group.when);
			newGroup.set("start_point", getLocationName($scope.group.start));
			newGroup.set("end_point", getLocationName($scope.group.end));
			
			newGroup.save(null, {
				success: function(newGroup) {
					alert('New object created with ObjectId: ' + newGroup.id);
				},
				error: function(newGroup, error) {
					alert('this failed');
				}
			});
		}
	});