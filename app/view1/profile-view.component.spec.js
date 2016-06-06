'use strict';

describe('profileView', function() {

    // Load the module that contains the `profileView` component before each test
    beforeEach(module('myApp.view1'));

    // Test the controller
    describe('ProfileViewController', function() {

      it('should create a `phones` model with 3 phones', inject(function($componentController) {
        var ctrl = $componentController('profileView');

        expect(ctrl.avatar).toBeDefined();
        expect(ctrl.name).toBeDefined();
        expect(ctrl.occupation).toBeDefined();
        expect(ctrl.bio).toBeDefined();

      }));

    });

});
