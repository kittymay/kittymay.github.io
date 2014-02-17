var KittyApp = angular.module('KittyApp', ['ngRoute']);

	KittyApp.config(function ($routeProvider) {
		$routeProvider 
			.when('/view1', 
				{
					controller: 'MainCtrl',
					templateUrl: '/app/partials/View1.html'
				})
			.otherwise({ redirectTo: '/view1'
				});
	})