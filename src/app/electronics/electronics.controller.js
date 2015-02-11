'use strict';

angular.module('stemStore')
  .controller('ElectronicsCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.awesomeThings = [

{image:'assets/images/electronics/WP_20150208_017.jpg'},
      {image:'assets/images/electronics/charger.jpg'},
      {image:'assets/images/electronics/WP_20150208_041.jpg'}
    ];

  });
