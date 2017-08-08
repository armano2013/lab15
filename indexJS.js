var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/main',{
       templateUrl: 'main/main.html',
       controller: 'myCtrl',
    })
    .when('/view1',{
       templateUrl: 'View1/view1.html',
       controller: 'myCtrl',
    })
    .when('/view2',{
       templateUrl: 'View2/view2.html',
       controller: 'myCtrl',

    })
    .otherwise({
    redirectTo: '/view1'
});

$locationProvider.hashPrefix('');

});
