angular.module('pokedex').service("BuscaPokemonService", ["$http",
    function ($http) {
        var self = this;
        self.pokemonList = null;

        function orderPokemonList(list) {
            self.pokemonList = list.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            });
        }

        function buscaPokemonsComNomeParecido(nome) {
            var result = [];
            for (var i = 0; i < self.pokemonList.length; i++) {
                var pokemon = self.pokemonList[i];
                if (pokemon.name.includes(nome.toLowerCase())) {
                    if (!pokemon.pokeInfo) {
                        carregarInformacoesPokemon(pokemon)
                    }
                    result.push(pokemon);
                }
            }
            return result;
        }

        function carregarInformacoesPokemon(pokemon, callback) {
            $http.get("http://pokeapi.co/api/v2/pokemon/" + pokemon.name + "/").success(function (response) {
                pokemon.pokeInfo = response;
                callback(pokemon);
            });
        }

        this.buscaPokemon = function (nome, callback) {
            if (this.pokemonList) {
                callback(buscaPokemonsComNomeParecido(nome));
            } else {
                $http.get("http://pokeapi.co/api/v2/pokemon/?limit=811").success(function (response) {
                    orderPokemonList(response.results);
                    callback(buscaPokemonsComNomeParecido(nome));
                });
            }
        };

        this.buscarPokemonPorId = function (id, callback) {
            var result = null;
            self.pokemonList.forEach(function (pokemon) {
                if (!pokemon.pokeInfo) {
                    carregarInformacoesPokemon(pokemon, function (p) {
                        pokemon = p;
                        if (pokemon.pokeInfo.id == id) {
                            result = pokemon;
                        }
                    });
                } else if (pokemon.pokeInfo.id == id) {
                    result = pokemon;
                }
            });
            callback(result);
        };

    }
]);