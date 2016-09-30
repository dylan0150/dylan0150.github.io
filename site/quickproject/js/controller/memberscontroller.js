app.controller('MembersController', function($scope, $routeParams) {
  $scope.name = 'MembersController';
  $scope.params = $routeParams;
  $scope.members = [
    {
      firstname: "John",
      lastname: "Doe",
      joindate: "01/01/2010",
      age: 24,
      games: [
        {
          score: "",
          win: "",
          date: "",
        },
      ],
      this.setmembervals = function(){
        alert("Hi!");
      }
    }
  ];
})
