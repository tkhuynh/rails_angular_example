app.controller('PostCtrl', ['$scope', '$stateParams', 'posts', 'post', '$location',
	function($scope, $stateParams, posts, post, $location) {
		$scope.post = post;
		$scope.addComment = function() {
			if ($scope.body === '') return;
			posts.addComment(post.id, {
					body: $scope.body,
					author: 'user'
				})
				.success(function(comment) {
					$scope.post.comments.push(comment);
				});
			$scope.body = '';
		};

		$scope.clearComment = function() {
			$scope.body = '';
		};

		$scope.home = function() {
			$location.path('/home');
		};

		$scope.incrementUpvotes = function(comment) {
			posts.upvoteComment(post, comment);
		};
	}
]);