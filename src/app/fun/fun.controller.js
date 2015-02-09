'use strict';

angular.module('stemStore')
  .controller('FunCtrl', function ($scope) {
    $scope.myInterval = 3000;
     $scope.awesomeThings = [
{image:'assets/images/fun/WP_20150208_029.jpg'},
{image:'assets/images/fun/WP_20150208_031.jpg'},
{image:'assets/images/fun/WP_20150208_033.jpg'},
{image:'assets/images/fun/WP_20150208_034.jpg'},
{image:'assets/images/fun/WP_20150208_035.jpg'},
{image:'assets/images/fun/WP_20150208_039.jpg'},
{image:'assets/images/fun/WP_20150208_040.jpg'}
    ];

  });
