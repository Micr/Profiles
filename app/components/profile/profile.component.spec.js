'use strict';

describe('profile component', function() {

    // Load the module that contains the `profileView` component before each test
    beforeEach(module('myApp.profile'));

    // Test the controller
    describe('profile component controller', function() {
      var ctrl, $httpBackend;

      beforeEach(inject(function($componentController, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('profile-list/profiles.json')
                  .respond([{ "id"  : "1", "name": "Jim Carrey"}]);
        ctrl = $componentController('profile');
      }));

      it('should create a "profiles" property with 2 profiles fetched with $http', function() {
        expect(ctrl.profiles).toBeUndefined();
        $httpBackend.flush();
        expect(ctrl.profiles).toEqual([{ "id"  : "1", "name": "Jim Carrey"}]);

      });

      it('should create an "active" property with 2 profiles fetched with $http', function() {
        expect(ctrl.profiles).toBeUndefined();
        $httpBackend.flush();
        expect(ctrl.active).toEqual({ "id"  : "1", "name": "Jim Carrey" });

      });

    });

});
