'use strict';

angular.module('yoFoodFlagApp')
    .controller('HomeCtrl', function ($scope, $location, Auth, toaster) {

        $scope.signedIn = Auth.signedIn;

        $scope.logout = function () {
            toaster.pop('success', "Logged out successfully");
            Auth.logout();
            $location.path('/');
        }

    });
