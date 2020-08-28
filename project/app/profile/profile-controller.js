"use strict";

var app = require('../app');

var profileController = function($scope, dataService, toastr) {

  $scope.basicInfo = dataService.getBasicInfoData();
  $scope.adminInfo = dataService.getAdminInformation();

  $scope.basicInfoEdit = angular.copy($scope.basicInfo);
  $scope.socialEdit = angular.copy($scope.adminInfo);

  $scope.saveBasicForm = function() {
    dataService.saveBasicInfo(angular.copy($scope.basicInfoEdit));
    $scope.basicInfo = angular.copy($scope.basicInfoEdit);
    toastr["success"]("Your data has been successfully save");
  };

  $scope.saveSocialForm = function() {
    dataService.saveAdminInfo(angular.copy($scope.socialEdit));
    $scope.adminInfo = angular.copy($scope.socialEdit);
    toastr["success"]("Social information has been successfully save");
  };

};

app.controller("profileController", ['$scope', 'dataService', 'toastr', profileController]);

module.exports = app;
