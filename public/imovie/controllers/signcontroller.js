app.controller('LogInController',['$scope','$rootScope','$location','$window','localStorageService','UserService',
	function LogInController($scope,$rootScope, $location,$window,localStorageService,UserService){

		$scope.logIn = function login(username, password){
        localStorageService.clearAll();
	    if(username!= undefined && password!= undefined){
				UserService.logIn(username, password).success(function(data){
					localStorageService.set('isLogged', true);
                    if(username.toLowerCase() =='admin' || username.toLowerCase() == 'ananta'){
                         localStorageService.set('isAdmin', true);
                    }
					$window.sessionStorage.setItem('username',username.toLowerCase());
                    $window.sessionStorage.token = data.token;
					$location.path('/index');
				}).error(function(status,data){
                     localStorageService.clearAll();
                     delete $window.sessionStorage.token;
					 console.log(status);
					 console.log(data);
				});
			}
		}

	}]);

<<<<<<< HEAD:public/imovie/controllers/signcontroller.js
app.controller('LogOutController',['$scope','$rootScope','$location','$window','localStorageService','$route','UserService',
    function LogOutController($scope,$rootScope, $location,$window,localStorageService,$route,UserService){
=======
app.controller('LogOutController',['$scope','$rootScope','$location','$window','localStorageService','$route','UserService', 'LoadJsonService',
    function LogOutController($scope,$rootScope, $location,$window,localStorageService,$route,UserService, LoadJsonService){
>>>>>>> 92410207fe21e88c14eb31979514782dcc8e7724:public/javascripts/controllers/signcontroller.js
        $scope.logout = function logout(){
            if(localStorageService.get('isLogged')){
                localStorageService.set('isLogged', false);
                localStorageService.set('isAdmin', false);
                delete $window.sessionStorage.token;
                $location.path("/login");
                $rootScope.isLoggedIn = localStorageService.get('isLogged');
            }
         } 

         $scope.main = function main(){ 
            if(localStorageService.get('isLogged')){
                 $location.path('/index');
            }
         }
    }]);