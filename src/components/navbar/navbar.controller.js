'use strict';

angular.module('stemStore')
  .controller('NavbarCtrl', function ($scope) {
    $scope.links = [
      {description:'Paper and Binders', link:'/paper'},
      {description:'Writing Tools', link:'/writing'},
      {description:'Electronics', link:'/electronics'},
      {description:'Personal/Misc', link:'/misc'},

    ]
  });