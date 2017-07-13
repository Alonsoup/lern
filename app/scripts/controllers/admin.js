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
    $scope.gotName = false;
    $scope.submitted = false;
    $scope.submit = function() {
      console.log('Submit corriendo');
      var parsedName = $scope.data.courseName.toLowerCase().split(' ').join('_');
      fireFactory.setCourse(parsedName, $scope.data);
      $scope.submitted = true;
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
    //This function is just for development
    $scope.logIt = function() {
      console.info('Parsed title: ', $scope.data.courseName.toLowerCase().split(' ').join('_'));
    }
    $scope.next = function() {
      $scope.gotName = true;
    }
    $scope.goToStep = function(step) {
      console.info('Step: ', step);
      $scope.step = step;
      $scope.point = 0;
      $scope.read = 0;
      $scope.question = 0;
      $scope.option = 0;
    }
    $scope.goToPoint = function(point) {
      $scope.point = point;
    }
    $scope.goToRead = function(read) {
      $scope.read = read;
    }
    $scope.goToQuestion = function(question) {
      $scope.question = question;
      $scope.option = 0;
    }
    $scope.goToOption = function(option) {
      $scope.option = option;
    }
  });
