'use strict';

angular.module('ionFoodFlagApp')

  .controller('NavCtrl', function ($scope, $location, Auth, toaster) {
    $scope.menu = [

    ];

    $scope.isCollapsed = true;

    $scope.isActive = function (route) {
      return route === $location.path();
    };

    $scope.currentUser = Auth.user;

    $scope.signedIn = Auth.signedIn;

    $scope.isManager = Auth.isManager;

    $scope.isAdmin = Auth.isAdmin;

    $scope.logout = function () {
      toaster.pop('success', "Logged out successfully");
      Auth.logout();
      $location.path('/');
    }

  });
