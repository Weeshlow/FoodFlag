'use strict';

angular.module('ionFoodFlagApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.restMap', {
        url: '/restMap',
        views: {
          'menuContent': {
            templateUrl: 'templates/restMap.html',
            controller: 'RestMapCtrl'
          }
        }
      });
  });
