'use strict';

angular.module('helloApp').directive('footer', [
  function () {
    return {
      templateUrl: 'views/footer.html',
      restrict: 'ACE'
    };
  }]);
