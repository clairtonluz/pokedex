angular.module("pokedex").controller("HabitatsController" , [ "HabitatsService" , "$scope" , function( HabitatsService , $scope  ) {
  var self = this;

  $scope.carregarHabitates = function(pokemonId){
    $scope.habitat = null;
    $scope.errorNotFound = null;
    HabitatsService.carregaHabitates(pokemonId , function(data){
      $scope.habitat = data.habitat;
    }, function error(data){
      $scope.errorNotFound = "Não foi possível localizar o habitate do pokemon";
    });
  }



}]);