'use strict';

angular.module('stemStore')
  .controller('PaperCtrl', function ($scope) {
    $scope.myInterval = 3000;
     $scope.awesomeThings = [
      {image:'assets/images/paper/WP_20150208_003.jpg'},
      {image:'assets/images/paper/WP_20150208_004.jpg'},
      {image:'assets/images/paper/WP_20150208_006.jpg'},
      {image:'assets/images/paper/WP_20150208_007.jpg'},
      {image:'assets/images/paper/WP_20150208_008.jpg'},
      {image:'assets/images/paper/WP_20150208_012.jpg'},
      {image:'assets/images/paper/WP_20150208_014.jpg'},
      {image:'assets/images/paper/WP_20150208_023.jpg'},
      {image:'assets/images/paper/WP_20150208_026.jpg'},
      {image:'assets/images/paper/WP_20150208_027.jpg'},
       {image:'assets/images/paper/WP_20150209_001.jpg'}
    ];
  });
