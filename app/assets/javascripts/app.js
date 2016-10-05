var app = angular.module('flapperNews', ['ui.router']);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '/home.html',
				controller: 'MainCtrl'
		})
		.state('post', {
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller: 'PostCtrl'
		});
		$urlRouterProvider.otherwise('home');
	}
]);

app.factory('posts', [function() {
	var o = {
		posts: []
	};
	return o;
}]);

app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
	$scope.test = "Hello World";
	$scope.posts = posts.posts;
	$scope.addPost = function() {
		if (!$scope.title || $scope.title === '') {
			alert("You must enter both fields!");
			return;
		}
		$scope.posts.push({
			title: $scope.title,
			link: /http:\/\//.test($scope.link) ? $scope.link : "http://" + $scope.link,
			upvotes: 0,
			comments: [
		    {author: 'Joe', body: 'Cool post!', upvotes: 0},
		    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
		  ]
		});
		$scope.title = '';
		$scope.link = '';
	};
	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};

	app.controller('PostCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {
		$scope.post = posts.posts[$stateParams.id];
	}]);

}]);