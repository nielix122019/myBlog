"use strict";

var app = require('../app');


var entriesController = function($scope, dataService, toastr) {
  $scope.basicInfo = dataService.getBasicInfoData();
  $scope.adminInfo = dataService.getAdminInformation();
  $scope.postEdit = angular.copy(dataService.getNewPostData());


  $scope.submitPost = function() {
    dataService.createPost($scope.postEdit);
    toastr["success"]("New post has been publish");
  };

};

app.controller("entriesController", ['$scope', 'dataService', 'toastr', entriesController]);

module.exports = app;
