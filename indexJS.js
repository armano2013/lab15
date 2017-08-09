
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/main',{
       templateUrl: 'main/main.html',
       controller: 'MainController',
    })

    .when('/fizzbuzz',{
       templateUrl: 'FizzBuzz/fizzbuzz.html',
       controller: 'FizzBuzzController',
    })
    .when('/palindrome',{
       templateUrl: 'Palindrome/palindrome.html',
       controller: 'PalindromeController',
    })

    .when('/prime',{
       templateUrl: 'Prime/prime.html',
       controller: 'PrimeController',

    })
    .otherwise({
    redirectTo: '/fizzbuzz'
});

$locationProvider.hashPrefix('');

});