'use strict';

angular.module('stemStore')
  .controller('PaperCtrl', function ($scope) {
    var dir = 'assets/images/paper/';
    $scope.myInterval = 3000;
     $scope.awesomeThings = [
       {image:dir + 'WP_20150208_005'},
       {image:dir + 'WP_20150208_009'},
       {image:dir + 'WP_20150208_010'},
       {image:dir + 'WP_20150208_011'},
       {image:dir + 'WP_20150208_019'},
       {image:dir + 'WP_20150208_020'},
       {image:dir + 'WP_20150208_021'},
       {image:dir + 'WP_20150208_022'},
       {image:dir + 'WP_20150208_024'},
       {image:dir + 'WP_20150208_025'},
       {image:dir + 'WP_20150208_028'},
       {image:dir + 'WP_20150208_032'},
       {image:dir + 'WP_20150208_003'},
       {image:dir + 'WP_20150208_004'},
       {image:dir + 'WP_20150208_006'},
       {image:dir + 'WP_20150208_007'},
       {image:dir + 'WP_20150208_008'},
       {image:dir + 'WP_20150208_012'},
       {image:dir + 'WP_20150208_014'},
       {image:dir + 'WP_20150208_023'},
       {image:dir + 'WP_20150208_026'},
       {image:dir + 'WP_20150208_027'},
       {image:dir + 'WP_20150209_001'}
    ];
  });
