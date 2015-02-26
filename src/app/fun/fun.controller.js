'use strict';

angular.module('stemStore')
  .controller('FunCtrl', function ($scope) {
    var dir = 'assets/images/catalog/fun/';
    $scope.myInterval = 3000;
     $scope.awesomeThings = [
      {image:dir + 'WP_20150208_033', id:'2'}
    ];

  });
