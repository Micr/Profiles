angular.
  module('myApp.view1').
  component('profileView', {
    templateUrl: 'view1/profile-view.template.html',
    controller: ['$http', function ProfileViewController ($http) {
      // Profile number
      var counter = 0;
      var self = this;
      $http.get('profiles/profiles.json').then(function (response) {
        // user profiles
        self.profiles = response.data;
        newProfile();
      });
      function newProfile() {
        counter = (++counter % 5);
        self.active = self.profiles[counter];
      }
      this.change = function () {
        newProfile();
      }
    }]
  });
