'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('stemStore'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 3 awesome things', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('FunCtrl', {
      $scope: scope
    });

    expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
    expect(scope.awesomeThings.length > 3).toBeTruthy();
  }));
});
