'use strict';

angular.module('yoFoodFlagApp', [
    'ngCookies',
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'firebase',
    'ui.router',
    'ui.bootstrap',
    'toaster',
    'angularMoment',
    'ngGeolocation',
    'ngMap'
])

    // Define the constant which defines the Firebase database for this project
    .constant('FURL', 'https://foodflag.firebaseio.com/')

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
