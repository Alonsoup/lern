'use strict';

/**
 * @ngdoc service
 * @name lernApp.fire
 * @description
 * # fire
 * Factory in the lernApp.
 */
angular.module('lernApp')
  .factory('fireFactory', function() {
    // Service logic
    return {
      getCourse: function() {
        console.log('getCourse corriendo');
        var stepRef = firebase.database().ref('courses/intro_to_programming');
        return stepRef.once('value');
      }
    };
  });
