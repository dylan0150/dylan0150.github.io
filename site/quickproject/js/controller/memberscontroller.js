app.controller('MembersController', function($scope, $routeParams) {
  $scope.name = 'MembersController';
  $scope.params = $routeParams;
  $scope.members = [
    {
      firstname: "John",
      lastname: "Doe",
      games: 1,
      joindate: "01/01/2010"
    }
  ];
  var currentmember = $scope.members[$scope.params.id];
})
