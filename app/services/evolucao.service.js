angular.module('pokedex').service("EvolucaoService", ["$http", function ($http) {

    this.buscarEvolucao = _buscarEvolucao;

    function _buscarEvolucao(pokemonId, callback) {
        $http.get("http://pokeapi.co/api/v2/evolution-chain/" + pokemonId + "/").success(function (response) {
            callback(null, response);
        });
    }
}]);