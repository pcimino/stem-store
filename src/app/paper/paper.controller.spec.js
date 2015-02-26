'use strict';

describe('controllers', function(){
  var scope;
  var catalogService = {getList:function() {return {then:function(){return true;}};}};
  beforeEach(module('stemStore'));

  beforeEach(inject(function($rootScope, $injector) {
    scope = $rootScope.$new();
  }));

  it('should define awesome things', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('PaperCtrl', {
      $scope: scope,
      CatalogService: catalogService
    });

    expect(angular.isArray(scope.awesomeThings)).toBeTruthy();

  }));
});
