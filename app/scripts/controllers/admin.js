'use strict';

/**
 * @ngdoc function
 * @name lernApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the lernApp
 */
angular.module('lernApp').controller('AdminCtrl', function ($scope, fireFactory) {
    console.log('AdminCtrl corriendo');
    $scope.step = 0;
    $scope.submit = function() {
      console.log('Submit corriendo');
      fireFactory.setCourse($scope.courseName, $scope.data);
    }
    $scope.addStep = function() {
      $scope.step ++;
    }
  });
