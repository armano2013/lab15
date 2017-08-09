
var app = angular.module("myApp");
var app =angular.module('myApp');

app.controller('MainController',function($scope,$timeout,RedditFactory){

    RedditFactory.getPosts()
    .then(function(result){
        $timeout($scope.posts = result);
    })
    .catch(function(error){
        $scope.error = 'there was an error getting posts';
    });

      $scope.saveFavorites = saveFavorites;  

        function saveFavorites (){
            console.log($scope.posts);
}
 
});




  