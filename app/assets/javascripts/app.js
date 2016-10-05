var app = angular.module('flapperNews', ['ui.router', 'templates']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home/_home.html',
				controller: 'MainCtrl'
		})
		.state('post', {
			url: '/posts/{id}',
			templateUrl: 'posts/_posts.html',
			controller: 'PostCtrl'
		});
		$urlRouterProvider.otherwise('home');
	}
]);