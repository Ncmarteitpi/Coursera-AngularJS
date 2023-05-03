(function(){
'use strict';

    angular.module('myFirstApp', [])

    .controller('myFirstController', function($scope, $filter){

        $scope.name = "";
        $scope.numericVal = 0;
        $scope.showName = function()
        {
            var totalVal = 
            computeName($scope.name);
            $scope.numericVal = totalVal

        }

        function computeName(string)
        {
            var totStrVal = 0;
            for (var i=0;i < string.length; i++)
            {
                totStrVal += string.charCodeAt(i);
            }
            return totStrVal;
        }

        $scope.upperCase = function()
        {
            var toUpper = $filter('uppercase');
            $scope.name = toUpper($scope.name);
        }

        $scope.peopleState = "eat";

        $scope.peopleEat = function()
        {
            $scope.peopleState = "full"
           
        }
    });
})();
