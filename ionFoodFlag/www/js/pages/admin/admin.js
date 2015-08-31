'use strict';

angular.module('ionFoodFlagApp')
    .config(function ($stateProvider) {
      $stateProvider
          .state('app.admin', {
            url: '/admin',
            views: {
              'menuContent': {
                templateUrl: "templates/admin.html",
                controller: 'AdminCtrl'
              }
            }
          });
    });
