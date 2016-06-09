angular.
  module('myApp.view1').
  component('profileView', {
    templateUrl: 'view1/profile-view.template.html',
    bindings: {
      onUpdate: '&'
    },
    controller: ['$http', function ProfileViewController ($http) {
      // Profile number
      var counter = 0;
      var self = this;
      $http.get('profiles/profiles.json').then(function (response) {
        // user profiles
        self.profiles = response.data;
        newProfile();
      });
      /**
       * Adds a new profile
       */
      function newProfile() {
        self.active = self.profiles[counter];
        counter = (++counter % 5);
      }
      /**
       * Rating change handler
       * @param  {number} rating - profile rating
       */
      this.setRating = function (rating) {
        self.lastRating = rating;
        self.onUpdate({profileId: self.active.id, profileRating: rating});
        newProfile();
      }
    }]
  });
