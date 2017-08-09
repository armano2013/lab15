var app = angular.module("myApp");
app.controller('PrimeController', function($scope) {
    var primeList = [];
    // fill with true
    for(var i = 0; i <= 1000; i++){
        primeList[i] = {
            id: i, 
            flag: true};
    }
    // set false
    for(var i = 0; i <= 1000; i++){
        for(var j = 2; j < i; j++){
            if(i%j === 0){
                primeList[i].flag = false;
                break;
            }
        }
    }

    $scope.primeFlags = function(){
      return primeList.slice($scope.fromVal, $scope.toVal);

    };
});
     