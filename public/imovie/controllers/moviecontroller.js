app.controller('MovieInCinemaController',['$scope','$rootScope','$location','localStorageService','$window','$timeout','$route', 'MovieService','ShareService',
	function MovieInCinemaController($scope,$rootScope,$location,localStorageService,$window,$route,$timeout, MovieService, ShareService){
    
    $scope.movies = [];
    
    MovieService.listMoviesInCinemas().success(function(result){
       $scope.movies = result.data;
    }).error(function(result,status){
        console.log(status);
        console.log(result);
    });

    $scope.canshow = false;
    
    $scope.openMovie = function(){
    	$scope.canshow = true;
    }

    $scope.closeMovie = function(){
    	$scope.canshow = false;
    }

}]);


app.controller('MovieOnLaptopController',['$scope','$rootScope','$location','localStorageService','$window','$timeout','$route', 'MovieService','ShareService',
	function MovieOnLaptopController($scope,$rootScope,$location,localStorageService,$window,$route,$timeout, MovieService, ShareService){
    
    $scope.movies = [];
    
    MovieService.listMoviesOnLaptop().success(function(data){
        $scope.movies = data;
    });

    $scope.canshow = false;

    $scope.openMovie = function(){
    	$scope.canshow = true;
    }

    $scope.closeMovie = function(){
    	$scope.canshow = false;
    }
    
}]);

app.controller('MovieController',['$scope','$rootScope','$location','localStorageService','$window','$timeout','$route', 'MovieService','ShareService',
	function MovieController($scope,$rootScope,$location,localStorageService,$window,$route,$timeout, MovieService, ShareService){
    
    $scope.checkMovie = function checkMovie(){
    	MovieService.listMoviesInCinemas().success(function(result){
    		if(result.movieIsEmpty){
    		     $location.path('/movie_info_welcome');
    	    }else{
    		     $location.path('/movies_in_cinemas');
    	    }    
        }).error(function(result,status){
           console.log(status);
           console.log(result);
       });
    }
    
    $scope.movietypes=["Action","Adventure", "Crime/Gangster", "Comedy", "Drama", "Epics/Historical",
                       "Horror", "Westerns", "Musicals/Dance", "War", "Animation", "Science Fiction" ];

    $scope.selectedIndex = -1;

    var movietype = "";

    $scope.typeClicked = function($index){
    	console.log($index);
    	$scope.selectedIndex = $index;
    	movietype = $scope.movietypes[$index]; 
    }   
    
    $scope.saveMovie = function saveMovie(movie, incinemachecked){
    	movie.type = movietype;
        if(movie != null && movie != undefined){
        	  if(incinemachecked){
        	      MovieService.saveMovieInCinemas(movie).success(function(data){
        	      	  if($scope.canshow){
        	      	  	  $scope.canshow = false;
        	      	  	  $window.location.reload();
        	      	  }else{
        	      	  	  $location.path('/movies_in_cinemas');
        	      	  }                   
                  }).error(function(status, data){
                     console.log(status);
                     console.log(data);
                  });               
        	  }else{
        	  	 MovieService.saveMovieOnLaptop(movie).success(function(data){
        	  	 	if($scope.canshow){
        	  	 		$scope.canshow = false;
        	  	 		$window.location.reload();
        	  	 	}else{
        	  	 		$location.path('/movies_on_laptop');
        	  	 	}       	  	 	
        	  	 }).error(function(status, data){
        	  	 	console.log(status);
        	  	 	console.log(data);
        	  	 });
        	 }
         }
    }


}]);

//Now use calc() method in CSS instead of listening resize event.
app.directive('resize', function($window){
	return function($scope, element){
		var w = angular.element($window);
		var setSecitionWidth = function(){
			$scope.sectionWidth = ($(window).width()- 27*2) + 'px';
		};
		w.bind('resize',function(){
            setSecitionWidth();
		});

		setSecitionWidth();
	}
});


app.directive('movieInfo', function(MovieService){
    return{
    	restrict: 'E',
    	templateUrl: 'views/movie-info.jade'
    }
});

















