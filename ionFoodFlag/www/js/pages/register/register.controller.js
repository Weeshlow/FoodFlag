'use strict';

angular.module('ionFoodFlagApp')

  .controller('RegisterCtrl', function ($scope, Auth, $location, toaster) {

    // Don't allow registering if you are logged in
    if (Auth.signedIn()) {
      toaster.pop('error', "Please log out, before attempting to register");
      // If logged in, redirect to the home page
      $location.path('/home');
    }

    $scope.register = function (user) {
      Auth.register(user);
      // Go back to the home screen after registering a user
      $location.path('/home');
    };

  });
