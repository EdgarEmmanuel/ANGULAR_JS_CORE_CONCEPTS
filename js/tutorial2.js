var app2 = angular.module('app2',[]);


app2.controller('controller_app2',function ($scope){
    $scope.name = "Main Controller"
})

app2.controller('controller_app2_b',function ($scope){
    $scope.name = "Main Controller first child"
})

app2.controller('controller_app2_c',function ($scope){
    $scope.name = "Main Controller second child"
})
