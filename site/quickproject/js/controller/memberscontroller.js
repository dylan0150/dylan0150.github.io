app.controller('MembersController', function($scope, $routeParams, $http) {
  $scope.name = 'MembersController';
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

  $scope.sortType = "id";
  $scope.sortReverse = false;

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

  $scope.getnumgames = function(){
    return $scope.currentmembergames().length
  };

  $scope.getwins = function(member){
    var wins = 0;
    for (var i = 0; i < $scope.games.length; i++) {
      if (member.id == $scope.games[i].p1id) {
        if ($scope.games[i].p1score < $scope.games[i].p2score){
          wins++;
        }
      };
      if (member.id == $scope.games[i].p2id) {
        if ($scope.games[i].p2score < $scope.games[i].p1score){
          wins++;
        }
      };
    };
    return wins;
  };

  $scope.getlosses = function(member){
    var losses = 0;
    for (var i = 0; i < $scope.games.length; i++) {
      if (member.id == $scope.games[i].p1id) {
        if ($scope.games[i].p1score > $scope.games[i].p2score){
          losses++;
        }
      };
      if (member.id == $scope.games[i].p2id) {
        if ($scope.games[i].p2score > $scope.games[i].p1score){
          losses++;
        }
      };
    };
    return losses;
  };

})
