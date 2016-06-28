angular.module("pokedex").controller("HabitatsController" , [ "HabitatsService" , "$scope" , function( HabitatsService , $scope  ) {
  var self = this;


  $scope.carregarHabitates = function(pokemonId){
    console.log("WHAT ? " , pokemonId );
    HabitatsService.carregaHabitates(pokemonId , function(data){
      $scope.habitat = data.habitat;
    });
  }



}]);