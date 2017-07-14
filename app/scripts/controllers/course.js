'use strict';

/**
 * @ngdoc function
 * @name lernApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lernApp
 */
angular.module('lernApp').controller('CourseCtrl', function ($scope, course) {
  console.info('Curso: ', course.val());
  $scope.steps = course.val().steps;
  $scope.title = course.val().courseName;
  $scope.step = 0;
  $scope.data = course.val().steps[$scope.step];
  $scope.showQuiz = false;
  $scope.counter = 0;
  $scope.right = false;
  $scope.wrong = false;
  $scope.finished = false;

  $scope.stepCheck = function(index) {
    if (index <= $scope.step) {
      return '/images/green-circle.png'
    } else {
      return '/images/gray-circle.png'
    }
  }

  $scope.toggle = function() {
    $scope.showQuiz = !$scope.showQuiz;
  }

  $scope.nextQuestion = function() {
    $scope.counter ++;
    $scope.right =  false;
  }

  $scope.nextStep = function() {
    console.log('Next step!');
    $scope.showQuiz = false;
    $scope.step ++;
    $scope.counter = 0;
    $scope.finished = false;
    $scope.right = false;
    $scope.data = course.val()[$scope.step];
  }

  $scope.checkAnswer = function(option) {
    if (option == $scope.data.quiz[$scope.counter].answer) {
      console.log('Correct');
      $scope.right = true;
      $scope.wrong = false;
      if ($scope.counter == $scope.data.quiz.length - 1) {
        console.log('You passed the quiz.');
        $scope.finished = true;

      }
    } else {
      $scope.wrong = true;
    }
  };

  });
