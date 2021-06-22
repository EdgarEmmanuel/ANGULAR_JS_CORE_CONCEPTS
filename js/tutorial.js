var app1 = angular.module('app1',[]);


app1.controller('controller_app1',function($scope){
    // simple variable
    $scope.first_number = 1;
    $scope.last_number = 2;
    $scope.countries = [
        {
            name:"senegal"
        },
        {
            name:"ghana"
        },
        {
            name:"cameroun"
        },
        {
            name:"congo"
        }
    ]

    // custom function

    $scope.makeTheSumOfTheNumbers = function (){
        $scope.sumResult = $scope.first_number + $scope.last_number;

        return `${$scope.first_number} + ${$scope.last_number} = ${$scope.sumResult}`;
    }
})
