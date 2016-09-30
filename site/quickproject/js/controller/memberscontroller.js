app.controller('MembersController', function($scope, $routeParams) {
  $scope.name = 'MembersController';
  $scope.params = $routeParams;
  $scope.members = [
    {
      name: "John";
      games: 24;
      joindate: "01/01/2010";
    },
    {
      name: "John";
      games: 24;
      joindate: "01/01/2010";
    },
    {
      name: "John";
      games: 24;
      joindate: "01/01/2010";
    }
  ]
})
