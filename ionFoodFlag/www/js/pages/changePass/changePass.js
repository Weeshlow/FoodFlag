'use strict';

angular.module('ionFoodFlagApp')
    .config(function ($stateProvider) {
      $stateProvider
          .state('app.changePass', {
            url: '/changePass',
            views: {
              'menuContent': {
                templateUrl: "templates/changePass.html",
                controller: 'ChangePassCtrl'
              }
            }
          });
    });
