'use strict';

/**
 * @ngdoc function
 * @name lernApp.controller:CourseCtrl
 * @description
 * # CourseCtrl
 * Controller of the lernApp
 */
angular.module('lernApp').controller('MainCtrl', function ($state, $scope, courses) {
  console.log('MainCtrl corriendo');
  console.log(courses.val());
  $scope.courses = courses.val();
});
