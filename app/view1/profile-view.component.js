angular.
  module('myApp.view1').
  component('profileView', {
    templateUrl: 'view1/profile-view.template.html',
    controller: function ProfileViewController () {
      this.avatar = "view1/Jim_Carrey_2008.jpg";
      this.name = 'John Doe';
      this.occupation = 'Manager';
      this.bio = 'Lorem ipsum dolor sit amet';
    }
  });
