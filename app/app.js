angular.module('pokedex', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
              .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
              })
              .when('/evolutions', {
                templateUrl: 'views/evolution.html',
                controller: 'EvolutionCtrl'
              }).otherwise('/');

        }
    ]);