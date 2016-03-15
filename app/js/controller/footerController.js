'use strict';

angular.module('helloApp').controller('footerController', ['$scope',
  function ($scope) {
    var myDate = new Date();
    var currentYear = myDate.getFullYear();
    $scope.myYear = currentYear;
  }]);
