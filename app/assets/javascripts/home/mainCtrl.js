app.controller('MainCtrl', ['$scope', 'posts', '$state', 'Auth', function($scope, posts, $state, Auth) {
	$scope.posts = posts.posts;
	$scope.addPost = function() {
		if (Auth._currentUser) {
			if (!$scope.title || $scope.title === '') {
				return;
			}
			posts.create({
				title: $scope.title,
				link: $scope.link,
			});
			$scope.title = '';
			$scope.link = '';
		} else {
			$state.go('login');
		}
	};
	$scope.incrementUpvotes = function(post) {
		posts.upvote(post);
	};
}]);