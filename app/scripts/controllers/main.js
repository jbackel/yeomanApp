'use strict';

angular.module('mockAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  })
  
  .controller('thisCtrl', function($scope) {
    $scope.awesomeThings = [
    'yo dawg',
    'keep it real',
    'fo life'
    ];
  });
  

