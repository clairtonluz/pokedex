angular.module('pokedex')
    .controller('AbaCtrl', ['$scope', function($scope){
        $scope.setAba = _setAba;
        $scope.isAba = _isAba;
        
        $scope.aba = 1;
        
        function _setAba(aba) {
            console.log("test1");
            $scope.aba = aba;
        };

        function _isAba(aba) {
            return $scope.aba == aba;
        };
    }]);