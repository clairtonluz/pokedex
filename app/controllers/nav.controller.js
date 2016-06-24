angular.module('pokedex')
    .controller('AbaCtrl', ['$scope', function($scope){
        $scope.setAba = _setAba;
        $scope.isAba = _isAba;
        
        $scope.aba = 'home';

        var _setAba = function(aba) {
            console.log(aba);
            $scope.aba = aba;
        };

        var _isAba = function(aba) {
            console.log(this.aba == aba);
            return $scope.aba == aba;
        };
    }]);