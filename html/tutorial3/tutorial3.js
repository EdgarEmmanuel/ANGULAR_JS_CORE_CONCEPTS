var app3 = angular.module('app3',['ngSanitize','ngResource'])


app3.controller("controller_app3",function($scope,$sce,$http){
    $scope.name = "test which permits to not display curly braces in the app thanks to <<ng-cloak>>";

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
    ];


    $scope.getList = function (){
        return $scope.showList ? 'olcountries.html': 'ulcountries.html';
    }

    $scope.number;

})
