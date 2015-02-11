'use strict';

angular.module('stemStore', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/supplies', {
        templateUrl: 'app/paper/paper.html',
        controller: 'PaperCtrl'
      })
      .when('/tech-stuff', {
        templateUrl: 'app/electronics/electronics.html',
        controller: 'ElectronicsCtrl'
      })
      .when('/seasonal-fun', {
        templateUrl: 'app/fun/fun.html',
        controller: 'FunCtrl'
      })
      .when('/gotta-have', {
        templateUrl: 'app/misc/misc.html',
        controller: 'MiscCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
