angular.
  module('myApp.profile', [])
  .component('profile', {
    templateUrl: 'components/profile/profile.template.html',
    bindings: {
      onUpdate: '&'
    },
    controller: ['$http', function ($http) {

      // Profile number
      var counter = 0;
      // Reference to this object
      var self = this;
      // Gets profiles file from the server
      $http.get('profile-list/profiles.json').then(function (response) {
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

      function saveRating (rating) {
          $http.post('/ratings/save', rating).then(function () {

          });
      };
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
