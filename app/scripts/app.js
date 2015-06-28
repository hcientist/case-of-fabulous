'use strict';

/**
 * @ngdoc overview
 * @name caseOfFabulousApp
 * @description
 * # caseOfFabulousApp
 *
 * Main module of the application.
 */
angular
  .module('caseOfFabulousApp', [
    'ngCookies',
    'ngResource',
    'ngDroplet',
    'ngRoute'
  ])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        }).
        otherwise({
          redirectTo: '/'
        });
    }
  ]);
