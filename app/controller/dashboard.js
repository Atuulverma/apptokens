(function(){
	'use strict';

angular
.module("app")
.controller('DashboardController', ['$scope', '$http','$location', function($scope, $http, $location){
	console.log('Dashboard Controller Initialized...');

	console.log('$rootScope.loginStatus');
}]);
})