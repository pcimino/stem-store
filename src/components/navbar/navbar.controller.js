'use strict';

angular.module('stemStore')
  .controller('NavbarCtrl', function ($scope) {
    $scope.links = [
      {description:'Supplies', link:'/supplies', image:'supplies-small.png'},
      {description:'Tech Stuff', link:'/tech-stuff', image:'tech-stuff-small.png'},
      {description:'Seasonal Fun', link:'/seasonal-fun', image:'fun-stuff-small.png'},
      {description:'Gotta Have', link:'/gotta-have', image:'gotta-have-small.png'}
    ];
  });
