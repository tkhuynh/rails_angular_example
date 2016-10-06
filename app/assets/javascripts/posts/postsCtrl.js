app.controller('PostCtrl', ['$scope', '$stateParams', 'posts', 'post', function($scope, $stateParams, posts, post) {
	$scope.post = post;
	$scope.addComment = function() {
		console.log($scope.body)
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
}]);