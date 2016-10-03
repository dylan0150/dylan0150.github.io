//Jane and John are examples that have been added manually to the members Array.

app.controller('MembersController', function($scope, $routeParams, $http) {
  $scope.name = 'MembersController';
  $scope.params = $routeParams;
  $scope.members = [
    {
      firstname: "Jane",
      lastname: "Doe",
      joindate: "01/01/2010",
      age: 27,
      bio: "Sample bio would go here if I could be bothered to write it.",
      games: [
        {
          score: "110",
          win: true,
          date: "01/01/2016",
          opponent: "John Doe",
        },
      ],
    },
    {
      firstname: "John",
      lastname: "Doe",
      joindate: "01/01/2010",
      age: 24,
      bio: "Sample bio would go here if I could be bothered to write it.",
      games: [
        {
          score: "90",
          win: false,
          date: "01/01/2016",
          opponent: "Jane Doe",
        },
      ],
    }
  ];

  $scope.checkwin = function(game){
    if (game.win == true){
      return "Yes";
    }
    else if (game.win == false){
      return "No";
    }
    else {
      return "Tie";
    }
  }

  $scope.gethighscore = function(val,member){
    var highscore = 0;
    var when = "n/a";
    var who = "n/a";
    for (var i = 0; i < member.games.length; i++) {
      if (member.games[i].score > highscore) {
        highscore = member.games[i].score;
        when = member.games[i].date;
        who = member.games[i].opponent;
      }
    };
    switch (val) {
      case "score":
        return highscore;
      break;
      case "date":
        return when;
      break;
      case "opponent":
        return who;
      break;
    };
  };

  $scope.getwins = function(member){
    var wins = 0;
    for (var i = 0; i < member.games.length; i++) {
      if (member.games[i].win) {
        wins++;
      }
    }
    return wins;
  };

  $scope.getlosses = function(member){
    var losses = 0;
    for (var i = 0; i < member.games.length; i++) {
      if (!member.games[i].win) {
        losses++;
      }
    }
    return losses;
  };

  $scope.getaveragescore = function(member){
    var totalscore = 0;
    for (var i = 0; i < member.games.length; i++) {
      totalscore += member.games[i].score;
    };
    var averagescore = totalscore / member.games.length;
    return averagescore;
  };
})
