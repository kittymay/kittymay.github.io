var KittyApp = angular.module('KittyApp', ['ngRoute'])

	.config(function ($routeProvider) {
		
		$routeProvider 
			.when('/home', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/home.html'
				})
			.when('/about/approach',
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/about/approach.html'
				})
			.when('/about/testimonials',
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/about/testimonials.html'
				})
			.when('/about/background',
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/about/background.html'
				})
			.when('/contact', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/contact.html'
				})
			.when('/work/youth', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/work/youth.html'
				})
			.when('/work/adults', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/work/adults.html'
				})
			.when('/work/professionals', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/work/professionals.html'
				})
			.when('/upcoming', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/upcoming.html'
				})
			.otherwise({ redirectTo: '/home'
				});
	});