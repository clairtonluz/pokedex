angular.module('pokedex')
    .controller('HomeCtrl', ['$scope' , 'BuscaPokemonService', function($scope , BuscaPokemonService) {

      $scope.nome = "";
      $scope.resultado = null;
      $scope.pokemon = null;

      $scope.buscar = function(){
        $scope.pokemon = null;
        BuscaPokemonService.buscaPokemon( $scope.nome , function(resultado){
          if(resultado.length > 1){
            $scope.resultado = resultado;
          }else if(resultado.length == 1){
            $scope.pokemon = resultado[0];
          }else{
            $scope.resultado = [];
          }
        });
      }

      $scope.selecionarPokemon = function(pokemon){
        $scope.pokemon = pokemon;
      }
    }]);