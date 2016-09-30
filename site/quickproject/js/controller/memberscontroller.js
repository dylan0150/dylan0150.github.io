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
      gethighscore: function(){
        var highscore = 0;
        for (var i = 0; i < games.length; i++) {
          if (games[i].win) {
            if (games[i].score > highscore) {
              highscore = games[i].score;
            }
          }
        }
        return {
          score: highscore;
        }
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
