app.controller('MembersController', function($scope, $routeParams) {
  $scope.name = 'MembersController';
  $scope.params = $routeParams;
  var currentmember = $scope.params.id
  $scope.members = [
    {
      firstname: "John",
      lastname: "Doe",
      games: 1,
      joindate: "01/01/2010"
    }
  ]
})
