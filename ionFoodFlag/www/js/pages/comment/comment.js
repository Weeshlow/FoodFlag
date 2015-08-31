'use strict';

angular.module('ionFoodFlagApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.comment', {
        url: '/comment',
        views: {
          'menuContent': {
            templateUrl: 'templates/comment.html',
            controller: 'CommentCtrl'
          }
        }
      });
  });
