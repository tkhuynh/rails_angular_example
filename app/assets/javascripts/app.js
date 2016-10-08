var app = angular.module('flapperNews', ['ui.router', 'templates', 'Devise']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				resolve: {
					postPromise: ['posts', function(posts) {
						return posts.getAll();
					}]
				},
				url: '/home',
				templateUrl: 'home/_home.html',
				controller: 'MainCtrl'
			})
			.state('post', {
				resolve: {
					post: ['$stateParams', 'posts', function($stateParams, posts) {
						return posts.get($stateParams.id);
					}]
				},
				url: '/posts/{id}',
				templateUrl: 'posts/_posts.html',
				controller: 'PostCtrl'
			});
		$urlRouterProvider.otherwise('home');
	}
]);