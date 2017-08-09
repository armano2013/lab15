var app =angular.module('myApp');
app.factory('RedditFactory',function($http){
    var postData;

    return{
       getPosts:getPosts
    };

    function getPosts(){
        if(postData){
            //if we already have data return that
            return Promise.resolve(postData);
        }
        //if we dont have data
        //use http service to get data from reddit
       return $http.get ('https://www.reddit.com/r/aww/.json')
        .then(function(result){
         postData=result.data.data.children
         return postData;
         });
    };

});