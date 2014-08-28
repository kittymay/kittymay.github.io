'use strict';

/**
 * @ngdoc overview
 * @name kittymapgithubioApp
 * @description
 * # kittymapgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('kittymapgithubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
