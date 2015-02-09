'use strict';

angular.module('stemStore', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap', 'angular-carousel'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/paper', {
        templateUrl: 'app/paper/paper.html',
        controller: 'PaperCtrl'
      })
      .when('/electronics', {
        templateUrl: 'app/electronics/electronics.html',
        controller: 'ElectronicsCtrl'
      })
      .when('/misc', {
        templateUrl: 'app/misc/misc.html',
        controller: 'MiscCtrl'
      })
      .when('/writing', {
        templateUrl: 'app/writing/writing.html',
        controller: 'WritingCtrl'
      })
      .when('/fun', {
        templateUrl: 'app/fun/fun.html',
        controller: 'FunCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
