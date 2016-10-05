app.controller('GamesController', function($scope,$http,$routeParams){
  $scope.name = 'GamesController';
  $scope.params = $routeParams;
  $scope.games = [];
  $scope.members = [];

  $http.get("php/getgames.php")
    .then(function (response) {$scope.games = response.data.records});

  $http.get("php/getmembers.php")
    .then(function (response) {$scope.members = response.data.records});

  $scope.getmemberbyid = function(memberid){
    for (var i = 0; i < $scope.members.length; i++) {
      if ($scope.members[i].id == memberid) {
        return $scope.members[i];
      };
    };
  };

  $scope.sortType = "date";
  $scope.sortReverse = false;

  $scope.getwinner = function(game){
    if (Math.floor(game.p1score) > Math.floor(game.p2score)) {
      return "Player 1";
    } else {
      return "Player 2";
    };
  };

  $scope.addgame = function(){
    $http.post("php/addgame.php",{
      'id':$scope.games.length,
      'p1id':$scope.p1id,
      'p2id':$scope.p2id,
      'p1score':$scope.p1score,
      'p2score':$scope.p2score,
      'date':$scope.date,
    })
    .success(function($response){
      console.log($response);
    })
  };
})
