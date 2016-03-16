'use strict';

angular
  .module('helloApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/recherche', {
        templateUrl: 'views/recherche.html'
      })
      .when('/recherche-sans-resultat', {
        templateUrl: 'views/recherche-sans-resultat.html'
      })
      .when('/client', {
        templateUrl: 'views/client.html'
      })
      .when('/contrat', {
        templateUrl: 'views/contrat.html'
      })
      .when('/nouveau-client', {
        templateUrl: 'views/nouveau-client.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
