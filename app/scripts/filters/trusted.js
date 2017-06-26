'use strict';

/**
 * @ngdoc filter
 * @name lernApp.filter:trusted
 * @function
 * @description
 * # trusted
 * Filter in the lernApp.
 */
angular.module('lernApp')
  .filter('trusted', ['$sce', function ($sce) {
    return function (url) {
      return $sce.trustAsResourceUrl(url);
    };
  }]);
