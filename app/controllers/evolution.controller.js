angular.module('pokedex')
    .controller('EvolutionCtrl', ['$scope', '$routeParams', 'EvolucaoService',
        function ($scope, $routeParams, EvolucaoService) {
            var pokemon = EvolucaoService.buscaPokemon($routeParams.id);

        }
    ]);