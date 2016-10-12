app.controller('AuthCtrl', ['$scope', '$state', 'Auth', function($scope, $state, Auth){

	$scope.login = function() {
    Auth.login($scope.user).then(function(){
      $state.go('home');
    }, function(error) {
      $scope.loginError = error.data.error;
    });
  };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home');
    }, function(error) {
      $scope.registerErrors = error.data.errors;
    });
  };
  
}]);