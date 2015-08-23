'use strict';

angular.module('yoFoodFlagApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('changePass', {
        url: '/changePass',
        templateUrl: 'app/changePass/changePass.html',
        controller: 'ChangePassCtrl'
      });
  });