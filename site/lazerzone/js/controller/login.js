app.controller('loginCtrl', function($scope,$state) {
  $scope.state = $state
  $scope.login_form = new Form('login_form','login')
})
