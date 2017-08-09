var app = angular.module("myApp");
app.controller('FizzBuzzController', function($scope) {
  $scope.array = [];
    var i = 1;
    for(i; i <= 100; i++){
      $scope.array.push(i);
    }
  }); 


       


