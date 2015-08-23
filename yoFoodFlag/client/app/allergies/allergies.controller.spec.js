'use strict';

describe('Controller: AllergiesCtrl', function () {

  // load the controller's module
  beforeEach(module('yoFoodFlagApp'));

  var AllergiesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllergiesCtrl = $controller('AllergiesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
