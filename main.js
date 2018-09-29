 let app = angular.module('app', ['ngRoute']);
 app.config(function ($routeProvider) {
 	$routeProvider.when('/', {
 		templateUrl: '/photo.html',
 		controller: 'photoCtrl',
 		controllerAs: 'photo'
 	});
 	$routeProvider.when('/about', {
 		templateUrl: '/about.html',
 		controller: 'aboutCtrl',
 		controllerAs: 'about'
 	});
 	$routeProvider.when('/admin', {
 		templateUrl: '/admin.html',
 		controller: 'adminCtrl',
 		controllerAs: 'admin'
 	});
 })
