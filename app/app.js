angular.module('pokedex', ['ngRoute', 'ngResource'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'HomeCtrl'
                }).otherwise('/');

        }
    ]);