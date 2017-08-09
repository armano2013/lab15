var app = angular.module("myApp");
app.controller('FizzBuzzController', function($scope) {
    $scope.fizz = function(number){
        if(!number && number !== 0){
            return '';
        }
        if(number % 15 === 0){
            return `The number ${number} is Fizzy and Buzzy`;
        } else  if ( number % 5 === 0) {
            return `The number ${number} is Buzzy`;
        } else if (number % 3 === 0) {
            return `The number ${number} is Fizzy`;
        } else {
            return `The number ${number} is neither Fizzy or Buzzy`;
        }
        
    }
  }); 


       


