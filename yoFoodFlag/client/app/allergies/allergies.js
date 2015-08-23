'use strict';

angular.module('yoFoodFlagApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('allergies', {
        url: '/allergies',
        templateUrl: 'app/allergies/allergies.html',
        controller: 'AllergiesCtrl'
      });
  });