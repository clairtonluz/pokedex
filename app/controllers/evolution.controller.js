angular.module('pokedex')
    .controller('EvolutionCtrl', ['$scope', '$routeParams', 'EvolucaoService',
        function ($scope, $routeParams, EvolucaoService) {
            $scope.pokemon = EvolucaoService.buscaPokemon($routeParams.id);
        }
    ]);