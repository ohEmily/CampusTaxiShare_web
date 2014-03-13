'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
	'ngRoute',
	'myApp.controllers',
	'myApp.filters',
	'myApp.services',
	'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'home'
		}).
		when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'about'
		}).
		when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'login'
		}).
		when('/register', {
			templateUrl: 'partials/register.html',
			controller: 'register'
		}).
		
			otherwise({
			redirectTo: '/home'
		});

	$locationProvider.html5Mode(true);
});