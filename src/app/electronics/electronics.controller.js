'use strict';

angular.module('stemStore')
  .controller('ElectronicsCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.awesomeThings = [

{image:'assets/images/electronics/WP_20150208_017.jpg'},
{image:'assets/images/electronics/earpods.jpg'},
{image:'assets/images/electronics/pinkearpods.jpg'},
{image:'assets/images/electronics/skullcandy_blue.jpg'},
{image:'assets/images/electronics/skullcandy_jamacain.jpg'}
    ];

  });
