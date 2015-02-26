'use strict';

angular.module('stemStore')
  .controller('PaperCtrl', function ($scope, CatalogService) {
    var catName = 'paper';
    var dir = 'assets/images/catalog/' + catName + '/';
    $scope.myInterval = 3000;
    $scope.awesomeThings = [];
    // Load catalog list
    // input arg matches the catalog name in the JSON file
    CatalogService.getList(catName).then(function(result) {
      if (result.length === 1) {
        for (var i in result[0].images) {
          $scope.awesomeThings.push({image: dir + result[0].images[i]});
        }
      }
    });
  });
