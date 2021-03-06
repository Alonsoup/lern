'use strict';

/**
 * @ngdoc overview
 * @name lernApp
 * @description
 * # lernApp
 *
 * Main module of the application.
 */
angular.module('lernApp', ['ui.router'])
  //Estoy usando el modo de inyección no seguro, para seguir el estilo de Amarello
  .run(function() {

  })
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        resolve: {
          courses: function(fireFactory) {
            return fireFactory.getAllCourses();
          }
        },
        views: {
          '': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('course', {
        url: '/course/{courseId}',
        resolve: {
          course: function(fireFactory, $stateParams) {
            return fireFactory.getCourse($stateParams.courseId);
          }
        },
        views: {
          'course': {
            templateUrl: 'views/course.html',
            controller: 'CourseCtrl'
          }
        }
      })
      .state('admin', {
        url: '/admin',
        resolve: {
          course: function() {
            //We need this because, in edit, the controller expects a parameter.
            return "No hay curso";
          }
        },
        views: {
          'admin': {
            templateUrl: 'views/admin.html',
            controller: 'AdminCtrl'
          }
        }
      })
      .state('edit', {
        url: '/edit/{courseId}',
        resolve: {
          course: function(fireFactory, $stateParams) {
            return fireFactory.getCourse($stateParams.courseId);
          }
        },
        views: {
          'edit': {
            templateUrl: 'views/admin.html',
            controller: 'AdminCtrl'
          }
        }
      });
  });
