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
      getAllCourses: function() {
        console.log('getAllCourses corriendo');
        var stepRef = firebase.database().ref('courses');
        return stepRef.once('value');
      },
      getCourse: function(courseId) {
        console.info('getCourse corriendo: ', courseId);
        var stepRef = firebase.database().ref('courses/' + courseId);
        return stepRef.once('value');
      },
      setCourse: function(parsedName, data) {
        console.log('setCourse corriendo');
        var coursesRef = firebase.database().ref('courses/' + parsedName);
        coursesRef.set(data);
        console.log(data);
      }
    };
  });
