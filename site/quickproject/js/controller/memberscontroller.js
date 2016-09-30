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
      gethighscore: function(val){
        for (var i = 0; i < games.length; i++) {
          if (games[i].win) {
            if (games[i].score > highscore) {
              var highscore = games[i].score;
              var when = games[i].date;
              var who = games[i].opponent;
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
      },
      getaveragescore: function(){
        var totalscore = 0;
        for (var i = 0; i < games.length; i++) {
          totalscore += games[i];
        }
        return Math.floor(totalscore / games[i].length);
      },

    }
  ];
})
