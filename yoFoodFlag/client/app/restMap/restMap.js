'use strict';

angular.module('yoFoodFlagApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('restMap', {
        url: '/restMap',
        templateUrl: 'app/restMap/restMap.html',
        controller: 'RestMapCtrl'
      });
  });