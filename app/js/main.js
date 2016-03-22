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
      .when('/nouveau-client', {
        templateUrl: 'views/nouveau-client.html'
      })
      .when('/contrat', {
        templateUrl: 'views/contrat.html'
      })
      .when('/nouveau-contrat', {
        templateUrl: 'views/nouveau-contrat.html'
      })
      .when('/sepa', {
        templateUrl: 'views/sepa.html'
      })
      .when('/direct-debit', {
        templateUrl: 'views/direct-debit.html'
      })
      .when('/gestion-operation', {
        templateUrl: 'views/gestion-operation.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
