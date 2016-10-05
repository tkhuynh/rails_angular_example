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
}]);