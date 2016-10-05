app.controller('LeaderboardController', function($scope, $routeParams, $http) {
  $scope.name = 'LeaderboardController';
  $scope.params = $routeParams;
  $scope.members = [];
  $scope.games = [];

  $http.get("php/getmembers.php")
    .then(function (response) {$scope.members = response.data.records});

  $http.get("php/getgames.php")
    .then(function (response) {$scope.games = response.data.records});

  $scope.getmemberbyid = function(memberid){
    for (var i = 0; i < $scope.members.length; i++) {
      if ($scope.members[i].id == memberid) {
        return $scope.members[i];
      };
    };
  };

  $scope.leaderboard = function(){
    var temparray = [];
    for (var i = 0; i < $scope.members.length; i++) {
      temparray.push({
        id:$scope.members[i].id,
        name:$scope.members[i].firstname + " " + $scope.members[i].lastname,
        highscore:Math.floor($scope.gethighscore($scope.members[i].id,"score")),
        averagescore:Math.floor($scope.getaveragescore($scope.members[i].id)),
      });
    }
    return temparray;
  };

  $scope.currentmember = function(id){
    for (var i = 0; i < $scope.members.length; i++) {
      if (id == $scope.members[i].id) {
        return $scope.members[i];
      }
    }
  };

  $scope.currentmembergames = function(id){
    var temparray = [];
    for (var i = 0; i < $scope.games.length; i++) {
      if ($scope.currentmember(id).id == $scope.games[i].p1id) {
        temparray.push({
          score:$scope.games[i].p1score,
          opponentscore:$scope.games[i].p2score,
          opponentid:$scope.games[i].p2id,
          opponentname:$scope.getmemberbyid($scope.games[i].p2id).firstname + " " + $scope.getmemberbyid($scope.games[i].p2id).lastname,
          date:$scope.games[i].date,
        });
      };
      if ($scope.currentmember(id).id == $scope.games[i].p2id) {
        temparray.push({
          score:$scope.games[i].p2score,
          opponentscore:$scope.games[i].p1score,
          opponentid:$scope.games[i].p1id,
          opponentname:$scope.getmemberbyid($scope.games[i].p1id).firstname + " " + $scope.getmemberbyid($scope.games[i].p1id).lastname,
          date:$scope.games[i].date,
        });
      };
    };
    return temparray;
  };

  $scope.gethighscore = function(id,val){
    var highscore = 0;
    var name = "";
    var date = "";
    for (var i = 0; i < $scope.currentmembergames(id).length; i++) {
      if (highscore < Math.round($scope.currentmembergames(id)[i].score)) {
        highscore = Math.round($scope.currentmembergames(id)[i].score);
        name = $scope.currentmembergames(id)[i].opponentname;
        date = $scope.currentmembergames(id)[i].date;
      }
    }
    switch (val) {
      case "score": return highscore;
      break;
      case "opponent": return name;
      break;
      case "date": return date;
      break;
    }
  };

  $scope.getaveragescore = function(id){
    var totalscore = 0;
    for (var i = 0; i < $scope.currentmembergames(id).length; i++) {
      totalscore = Math.round($scope.currentmembergames(id)[i].score) + totalscore;
    }
    return totalscore / $scope.currentmembergames(id).length;
  };
});
