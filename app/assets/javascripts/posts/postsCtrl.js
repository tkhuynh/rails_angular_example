app.controller('PostCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {
	$scope.post = posts.posts[$stateParams.id];
}]);