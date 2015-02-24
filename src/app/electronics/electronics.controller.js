'use strict';

angular.module('stemStore')
  .controller('ElectronicsCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.awesomeThings = [

{image:'assets/images/electronics/WP_20150208_017'},
      {image:'assets/images/electronics/charger'},
	  {image:'assets/images/electronics/skin'},
      {image:'assets/images/electronics/WP_20150208_041'}
    ];

  });
