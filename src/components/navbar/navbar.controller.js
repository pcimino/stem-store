'use strict';

angular.module('stemStore')
  .controller('NavbarCtrl', function ($scope) {
    var dir = 'assets/images/nav/';
    $scope.links = [
      {description:'Supplies', link:'/supplies', image:dir + 'supplies-small.png'},
      {description:'Tech Stuff', link:'/tech-stuff', image:dir + 'tech-stuff-small.png'},
      {description:'Seasonal Fun', link:'/seasonal-fun', image:dir + 'fun-stuff-small.png'},
      {description:'Gotta Have', link:'/gotta-have', image:dir + 'gotta-have-small.png'}
    ];
  });
