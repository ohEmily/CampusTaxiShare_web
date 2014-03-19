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
		when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'login'
		}).
		when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'about'
		}).
		when('/register', {
			templateUrl: 'partials/register.html',
			controller: 'register'
		}).
		when('/dashboard', {
			templateUrl: 'partials/dashboard.html',
			controller: 'dashboard'
		}).
			otherwise({
			redirectTo: '/login'
		});

	$locationProvider.html5Mode(true);
});