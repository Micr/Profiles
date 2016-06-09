'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.showNotification = false;
  $scope.showUpdate = function (profileId, profileRating) {
    $scope.profileRating = profileRating;
    $scope.profileId = profileId;
    $scope.showNotification = true;
    setTimer();
  }
  function setTimer () {
    $timeout(function () {
      $scope.showNotification = false;
    }, 5000);
  }
}]);
