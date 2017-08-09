var app = angular.module("myApp");
app.controller('PrimeController', function($scope) {
    $scope.primeTest = function (number){
      if (number===1)
      {
        return number + ' is Not Prime';
      }
      else if(number === 2)
      {
        return `${number} is Prime`;
      }else
      {
        for(var x = 2; x<number; x++)
        {
          if(number % x === 0)
          {
            return number + ' is Not Prime';
          }
        }
        return `${number} is Prime`;
      }

    }

});
