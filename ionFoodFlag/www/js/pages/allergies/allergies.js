'use strict';

angular.module('ionFoodFlagApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.allergies', {
        url: '/allergies',
        views: {
          'menuContent': {
            templateUrl: 'templates/allergies.html',
            controller: 'AllergiesCtrl'
          }
        }
      });
  });
