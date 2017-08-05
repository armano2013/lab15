var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })

    .when('/view1',{
       templateUrl: 'view1.html',
       controller: 'View1Ctrl',
})
    .when('view2',{
       templateUrl: 'view2.html',
       controller: 'View2Ctrl',

    })
    .otherwise({ 
    redirectTo: '/index.html'
});

$locationProvider.hashPrefix('');

});








