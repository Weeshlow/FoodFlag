'use strict';

angular.module('ionFoodFlagApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: "templates/login.html",
                        controller: 'LoginCtrl'
                    }
                }
            });
    });
