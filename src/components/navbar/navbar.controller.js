'use strict';

angular.module('stemStore')
  .controller('NavbarCtrl', function ($scope) {
    $scope.links = [
      {description:'Store Window', link:'/'},
      {description:'Paper and Binders', link:'/paper'},
      {description:'Writing Tools', link:'/writing'},
      {description:'Electronics', link:'/electronics'},
      {description:'Useful Stuff', link:'/misc'},
      {description:'Fun Stuff', link:'/fun'}

    ]
  });
