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
          opponent: "",
        },
      ],
    }
  ];
})

gethighscore = function(val,member){
  for (var i = 0; i < member.games.length; i++) {
    if (member.games[i].win) {
      if (member.games[i].score > highscore) {
        var highscore = member.games[i].score;
        var when = member.games[i].date;
        var who = member.games[i].opponent;
      }
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

getaveragescore = function(member){
  var totalscore = 0;
  for (var i = 0; i < member.games.length; i++) {
    totalscore += member.games[i];
  }
  return Math.floor(totalscore / member.games[i].length);
};
