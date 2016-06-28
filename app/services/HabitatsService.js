angular.module("pokedex").service("HabitatsService", [ "$http" , function( $http) {


  this.carregaHabitates = function(pokemonId , callback){
      $http.get("http://pokeapi.co/api/v2/pokemon-species/" + pokemonId + "/").success( function(response){
        callback(response);
      });
  }
}]);