'use strict';

angular.module('stemStore')
  .controller('FunCtrl', function ($scope) {
    $scope.myInterval = 3000;
     $scope.awesomeThings = [
{image:'assets/images/fun/WP_20150208_029.jpg', id:'0'},
{image:'assets/images/fun/WP_20150208_031.jpg', id:'1'},
{image:'assets/images/fun/WP_20150208_033.jpg', id:'2'},
{image:'assets/images/fun/WP_20150208_034.jpg', id:'3'},
{image:'assets/images/fun/WP_20150208_035.jpg', id:'4'},
{image:'assets/images/fun/WP_20150208_039.jpg', id:'5'},
{image:'assets/images/fun/WP_20150208_040.jpg', id:'6'}
    ];

  });
