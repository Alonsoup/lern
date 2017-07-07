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
    $scope.point = 0;
    $scope.read = 0;
    $scope.question = 0;
    $scope.option = 0;
    $scope.submit = function() {
      console.log('Submit corriendo');
      fireFactory.setCourse($scope.courseName, $scope.data);
    }
    $scope.addStep = function() {
      $scope.step ++;
      $scope.point = 0;
      $scope.read = 0;
      $scope.question = 0;
      $scope.option = 0;
    }
    $scope.addPoint = function() {
      $scope.point ++;
    }
    $scope.addRead = function() {
      $scope.read ++;
    }
    $scope.addQuestion = function() {
      $scope.question ++;
      $scope.option = 0;
    }
    $scope.addOption = function() {
      $scope.option ++;
    }
    $scope.backStep = function() {
      $scope.step --;
    }
    $scope.logIt = function() {
      console.log($scope.data);
    }
  });
