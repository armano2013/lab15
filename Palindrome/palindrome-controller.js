var app = angular.module("myApp");
app.controller('PalindromeController', function($scope) {
     $scope.palicheck = function (word) {
        
        var revword = word.split('').reverse().join('');
           return revword == word;
    };
});    