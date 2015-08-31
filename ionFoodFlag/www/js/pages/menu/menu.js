'use strict';

angular.module('ionFoodFlagApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.menu', {
        url: '/menu',
        views: {
          'menuContent': {
            templateUrl: 'templates/menu.html',
            controller: 'MenuCtrl'
          }
        }
      });
  });
