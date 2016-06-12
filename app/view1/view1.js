'use strict';

angular.module('myApp.view1', ['ngRoute', 'myApp.profile', 'myApp.rating-history'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.value('notification_timeout', 5000)

.controller('View1Ctrl', ['$scope', '$timeout', 'notification_timeout', function($scope, $timeout, notification_timeout) {
  var promise;
  $scope.notificationVisible = false;
  /**
   * Shows update notification
   * @param  {Number} profileId profile being rated
   * @param  {Number} profileRating profile rating
   */
  $scope.showUpdate = function (profileId, profileRating) {
    $scope.profileRating = profileRating;
    $scope.profileId = profileId;
    $scope.notificationVisible = true;
    setNotificationTimeout();
  }
/**
 * Hides profile rating after a delay
 */
  function setNotificationTimeout () {
    // Cancel a current timeout
    $timeout.cancel(promise);
    // Start notification timeout
    promise = $timeout(function () {
      $scope.notificationVisible = false;
    }, notification_timeout);
  }
}]);
