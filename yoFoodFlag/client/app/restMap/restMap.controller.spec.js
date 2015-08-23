'use strict';

describe('Controller: RestMapCtrl', function () {

  // load the controller's module
  beforeEach(module('yoFoodFlagApp'));

  var RestMapCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestMapCtrl = $controller('RestMapCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
