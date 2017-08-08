var app = angular.module('myApp', []);


app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })

    .when('/view1',{
       templateUrl: 'view1.html',
       controller: 'view1.html',
})
    .when('view2',{
       templateUrl: 'view2.html',
       controller: 'view2.html',

    })
    .otherwise({
    redirectTo: '/index.html'
});

$locationProvider.hashPrefix('');

});

app.controller('myCtrl', function($scope) {
        $scope.pictures = {
        waterfall : 'pictureView1.jpg',
        waterpic: 'pictureView2.jpg',
       
    };

   
});
