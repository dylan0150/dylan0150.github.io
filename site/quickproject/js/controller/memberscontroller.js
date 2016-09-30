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
          score: "15",
          win: true,
          date: "01/01/2016",
          opponent: "Jane Doe",
        },
      ],
    }
  ];
  $scope.gethighscore = function(val,member){
    var highscore = 0;
    for (var i = 0; i < member.games.length; i++) {
      if (member.games[i].win) {
        if (member.games[i].score > highscore) {
          highscore = member.games[i].score;
          var when = member.games[i].date;
          var who = member.games[i].opponent;
        }
      }
    };
    console.log(highscore);
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
})



getaveragescore = function(){
  var totalscore = 0;
  for (var i = 0; i < games.length; i++) {
    totalscore += games[i];
  }
  return Math.floor(totalscore / games[i].length);
};
