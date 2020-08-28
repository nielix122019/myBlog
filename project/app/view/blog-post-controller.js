"use strict";


var app = require('../app');

var blogPostController = function($scope, $location, $anchorScroll, dataService, toastr) {

  $scope.posts = [];
  $scope.posts = dataService.getPostData();
  $scope.basicInfo = dataService.getBasicInfoData();
  $scope.adminInfo = dataService.getAdminInformation();

  $scope.focusOnPost = function(postId) {
    if(!postId) return;
    $location.hash('post' + postId);
    $anchorScroll();
  };
};

app.controller("blogPostController", ['$scope', '$location', '$anchorScroll', 'dataService', 'toastr', blogPostController]);


module.exports = app;
