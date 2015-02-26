'use strict';

angular.module('stemStore')
  .controller('ElectronicsCtrl', function ($scope) {
    var dir = 'assets/images/catalog/electronics/';
    $scope.myInterval = 3000;
    $scope.awesomeThings = [

    {image:dir + 'WP_20150208_017'},
    {image:dir + 'charger'},
	  {image:dir + 'skin'},
    {image:dir + 'WP_20150208_041'}
    ];

  });
