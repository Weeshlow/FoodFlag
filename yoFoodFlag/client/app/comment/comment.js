'use strict';

angular.module('yoFoodFlagApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('comment', {
        url: '/comment',
        templateUrl: 'app/comment/comment.html',
        controller: 'CommentCtrl'
      });
  });