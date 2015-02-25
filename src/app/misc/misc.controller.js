'use strict';

angular.module('stemStore')
  .controller('MiscCtrl', function ($scope) {
    var dir = 'assets/images/misc/';
    $scope.myInterval = 3000;
     $scope.awesomeThings = [
        {image:dir + 'WP_20150208_013'},
        {image:dir + 'WP_20150208_015'},
        {image:dir + 'WP_20150208_016'},
        {image:dir + 'WP_20150208_029'},
        {image:dir + 'WP_20150208_030'},
        {image:dir + 'WP_20150208_031'},
        {image:dir + 'WP_20150208_034'},
        {image:dir + 'WP_20150208_035'},
        {image:dir + 'WP_20150208_036'},
        {image:dir + 'WP_20150208_037'},
        {image:dir + 'WP_20150208_038'},
        {image:dir + 'WP_20150208_040'},
        {image:dir + 'WP_20150208_042'},
        {image:dir + 'WP_20150209_002'},
        {image:dir + 'WP_20150209_003'}
    ];

  });
