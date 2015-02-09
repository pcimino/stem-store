'use strict';

angular.module('stemStore', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
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
      .otherwise({
        redirectTo: '/'
      });
  })
;
