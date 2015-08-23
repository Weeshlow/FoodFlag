'use strict';

angular.module('yoFoodFlagApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuCtrl'
      });
  });