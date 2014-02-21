var KittyApp = angular.module('KittyApp', ['ngRoute']);

	KittyApp.config(function ($routeProvider) {
		$routeProvider 
			.when('/home', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/home.html'
				})
			.when('/about', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/about.html'
				})
			.when('/work', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/work.html'
				})
			.when('/contact', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/contact.html'
				})
			.otherwise({ redirectTo: '/home'
				});
	})