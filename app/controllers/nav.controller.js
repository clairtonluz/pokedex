angular.module('pokedex')
    .controller('AbaCtrl', ['$scope', function($scope){
        $scope.setAba = _setAba;
        $scope.isAba = _isAba;
        
        $scope.aba = 'home';
        
        function _setAba(aba) {
            $scope.aba = aba;
        };

        function _isAba(aba) {
            return $scope.aba == aba;
        };
    }]);