'use strict';

/* App Module */

var mypakadooApp = angular.module('mypakadooApp', ['ngRoute']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
      when('/', {
        // controller: 'LoginController',
        templateUrl: 'views/login.html'
      }).
      when('/register', {
        // controller: 'RegisterController',
        templateUrl: 'views/register.html'
      }).      
      when('/services', {
        // controller: 'ServicesController',
        templateUrl: 'views/services.html'
      }).
      when('/pakete', {
        // controller: 'PaketeController',
        templateUrl: 'views/pakete.html'
      }).
      when('/account', {
        // controller: 'AccountController',
        templateUrl: 'views/account.html'
      }).
      when('/faq', {
        templateUrl: 'views/faq.html'
      }).      
      when('/mypakadoo', {
        // controller: 'MyPakadooController',
        templateUrl: 'views/mypakadoo.html'
      });

    // $locationProvider.html5Mode(true);

  }]);

