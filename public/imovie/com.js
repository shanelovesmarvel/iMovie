'use strict';
var app = angular.module('imovie',['ngRoute','ngTable','LocalStorageModule','ui.bootstrap.datetimepicker']);

var options = {};
options.api = {};
options.api.base_url = "http://localhost:5373";

app.config(['$locationProvider','$routeProvider',
	function($location, $routeProvider){
		$routeProvider.
		   when('/',{
		   	templateUrl:'/login',
		   	controller: 'LogInController'
		   }).
		   when('/index',{
             templateUrl:'/index',
             controller: 'MovieController'
		   }).
		   when('/movies_in_cinemas',{
		   	  templateUrl:'/movies_in_cinemas',
		   	  controller: 'MovieInCinemaController'
		   }).
		   when('/movies_on_laptop',{
		   	  templateUrl:'/movies_on_laptop',
		   	  controller: 'MovieOnLaptopController'
		   }).
		   when('/movie_info_welcome',{
		   	  templateUrl: '/movie_info_welcome',
		   	  controller: 'MovieController'
		   }).
		   when('/movie-info',{
              templateUrl: '/movie-info',
		   	  controller: 'MovieInController'
		   }). 
		   otherwise({
		   	redirectTo:'/'
		   });
	}]);

