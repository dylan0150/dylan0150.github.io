app.controller('EditMembersController', function($scope, $routeParams, $http) {
  $scope.name = 'EditMembersController';
  $scope.params = $routeParams;
  $scope.members = [];

  $http.get("php/getmembers.php")
    .then(function (response) {$scope.members = response.data.records});

  $scope.addmember = function(){
    $http.post("php/addmember.php",{
      'id':$scope.members.length,
      'firstname':$scope.firstname,
      'lastname':$scope.lastname,
      'dob':$scope.dob,
      'bio':$scope.bio,
    })
    .success(function($response){
      console.log("New Member Created");
      console.log($response);
    })
  };

  $scope.editmember = function(member){
    $http.post("php/updatemember.php",{
      'id':member.id,
      'firstname':$scope.firstname,
      'lastname':$scope.lastname,
      'dob':$scope.dob,
      'bio':$scope.bio,
    })
    .success(function($response){
      console.log("New Member Created");
      console.log($response);
    })
  }
});
