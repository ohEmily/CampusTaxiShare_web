'use strict';

// Declare app level module which depends on filters and services

angular.module('myApp', [
	'ngRoute',
	'myApp.controllers'
]).

  config(function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'user_auth'
		}).
		when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'about'
		}).
		when('/register', {
			templateUrl: 'partials/register.html',
			controller: 'user_auth'
		}).
		when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			controller: 'dashboard'
		}).
			otherwise({
			redirectTo: '/login'
		});

	$locationProvider.html5Mode(true);
  }).
  run(function() {
	// connect to database
	Parse.initialize("Dvtzs3UXsAhPCdhDNfqTBLL2f6cUS7F4elPM29FT", "V2MMK6JjhuGW9YvZiJWbif1qm9MXx6d4r7jLLg68");
	
  });