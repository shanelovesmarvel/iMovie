/**
 * Created by Shane on 4/19/16.
 */
var app = angular.module('myApp', []);

app.controller('myController', ['$scope',
    function($scope){
         $scope.my = {
             name : "Shane",
             location: "Beijing",
             age: 27,
             hobby: 'football',
             greeting: 'Nice meeting you!',
             music: 'Welcome to my life',
             movie: 'The Jungle Book'
         }
}]);

app.directive('myDirective', function(){
    return {
        template: "My name is {{ my.name}}, I am located in {{ my.location }} "
    }
});

app.directive('myInfo', function(){
    return{
        restrict: 'E',
        templateUrl: 'custom-directive.html'
    }
});

app.directive('myFavour', function(){
    return{
        templateUrl:function(elem, arr){
            return "my-" + arr.tt + ".html";
        }
    }
});