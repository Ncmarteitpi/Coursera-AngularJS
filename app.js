(function(){
'use strict';


var shoplist1 = ["Milk","Chocolate","Cookies","Brownies","Nutella","Almonds","Peanut Butter"];

var shoplist2 = 
[
    {
        name : "Milk",
        quantity : 23
    },
    {
        name : "Chocolate",
        quantity : 100
    },
    {
        name : "Cookies",
        quantity : 5
    },
    {
        name : "Brownies",
        quantity : 11
    },
    {
        name : "Nutella",
        quantity : 19
    }
];

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
    })
    // Lecture 17
    .controller('ngRepeatController', ngRepeatController);
    ngRepeatController.$inject = ['$scope'];
    function ngRepeatController($scope) {

        $scope.shoplist1 = shoplist1;
        $scope.shoplist2 = shoplist2;

        $scope.addNewItemList = function(){
            var nItem = 
                {
                    name : $scope.newItem,
                    quantity : $scope.newQuantity
                };
                
            $scope.shoplist2.push(nItem);
        };
        

    }
      
})();
