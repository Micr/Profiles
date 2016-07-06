angular.
  module('myApp.ratingHistory', [])
  .component('ratingHistory', {
    templateUrl: 'components/rating-history/rating-history.template.html',
    bindings: {
        ratings: '<'
    },
    controller: ['$http', function ($http) {
        var self = this;
      // Gets profiles file from the server
      $http.get('data/rating-history.json').then(function (response) {
        // user profiles
        self.ratings = response.data;
      });

      self.addRating = function (rating) {
          self.ratings.push(rating)
      }

    }]
  });
