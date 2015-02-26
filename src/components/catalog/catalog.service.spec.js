'use strict';

describe('Catalog Service', function(){
  var scope;
  var timeout;
  var catalogService;
  var httpBackend, http, q;
  var testCatResponse = { "data":[{"catalog":"electronics", "images":["electronics1"]},{"catalog":"fun", "images":["fun1"]}]};
  beforeEach(module('stemStore'));

  beforeEach(inject(function($rootScope, $injector) {
    scope = $rootScope.$new();
    httpBackend = $injector.get('$httpBackend');
    http = $injector.get('$http');
    q = $injector.get('$q');
    catalogService = $injector.get('CatalogService', { $http: http, $q: q });
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation ();
    httpBackend.verifyNoOutstandingRequest ();
  });

  it('Should have created the CatalogService', function() {
    expect(catalogService).toBeDefined();
  });

  it("should create retrun two items in list", function () {
    httpBackend.whenGET(catalogService.baseUrl).respond(testCatResponse);
    var promise = catalogService.getList();
    var theResult;

    promise.then(function (result) {
      theResult = result;
    });
    httpBackend.flush();

    expect(theResult.length).toBe(2);
  });

  it("should create return one item in list", function () {
    httpBackend.whenGET(catalogService.baseUrl).respond(testCatResponse);
    var promise = catalogService.getList('electronics');
    var theResult;

    promise.then(function (result) {
      theResult = result;
    });
    httpBackend.flush();

    expect(theResult.length).toBe(1);
    expect(theResult[0].images[0]).toBe('electronics1');
  });

  it("should create return zero items in list", function () {
    httpBackend.whenGET(catalogService.baseUrl).respond(testCatResponse);
    var promise = catalogService.getList('somevalue');
    var theResult;

    promise.then(function (result) {
      theResult = result;
    });
    httpBackend.flush();

    expect(theResult.length).toBe(0);
  });
});
