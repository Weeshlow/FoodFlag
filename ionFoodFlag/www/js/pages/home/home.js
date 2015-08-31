'use strict';

angular.module('ionFoodFlagApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: "templates/home.html",
                        controller: 'HomeCtrl'
                    }
                }
            });
    });
