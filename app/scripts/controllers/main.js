'use strict';

/**
 * @ngdoc function
 * @name caseOfFabulousApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the caseOfFabulousApp
 */
angular.module('caseOfFabulousApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // $scope.uploader = {};

    $scope.uploadCount = 3;

    $scope.$on('$dropletReady', function whenDropletReady() {
      // Directive's interface is ready to be used...
      console.log('droplet ready!!!');
      $timeout(function () {
        $scope.$apply(function () {
          console.log('timedout');
          // console.log($scope);
          console.log($scope.uploader);
          $scope.uploader.allowedExtensions(['png', 'jpg', 'bmp', 'gif']);
        });
      }, 2000);
    });

    // Listen for when the files have been successfully uploaded.
    $scope.$on('$dropletSuccess', function onDropletSuccess(event, response, files) {

      $scope.uploadCount = files.length;
      $scope.success     = true;
      console.log(response, files);

      $timeout(function timeout() {
        $scope.success = false;
      }, 5000);

    });

  });
