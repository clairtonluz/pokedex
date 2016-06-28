angular.module('pokedex')
    .controller('EvolutionCtrl', ['$scope', '$routeParams', 'EvolucaoService', 'BuscaPokemonService',
        function ($scope, $routeParams, EvolucaoService, BuscaPokemonService) {

            $scope.buscarEvolucoes = _buscarEvolucoes;
            $scope.evolutions = [];

            function _buscarEvolucoes(id) {
                $scope.evolutions = [];
                EvolucaoService.buscarEvolucao(id, function (error, result) {
                    var item = result.chain;
                    console.log(item);
                    if(item.evolves_to) {
                        item = item.evolves_to[0];
                        BuscaPokemonService.buscaPokemon(item.species.name, function (pokemon) {
                            $scope.evolutions.push(pokemon[0]);
                        });

                        if(item.evolves_to) {
                            item = item.evolves_to[0];
                            BuscaPokemonService.buscaPokemon(item.species.name, function (pokemon) {
                                $scope.evolutions.push(pokemon[0]);
                            });
                            
                            if(item.evolves_to) {
                                item = item.evolves_to[0];
                                BuscaPokemonService.buscaPokemon(item.species.name, function (pokemon) {
                                    $scope.evolutions.push(pokemon[0]);
                                });
                            }
                        }
                    }
                });
            }

        }
    ]);