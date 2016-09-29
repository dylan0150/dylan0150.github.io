var app = angular.module("scrabbleApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'view/main.html'
    })
    .when('/main', {
      controller: 'MainController',
      templateUrl: 'view/main.html'
    })
    .when('/members/', {
      controller: 'MembersController',
      templateUrl: 'view/members.php'
    })
    .when('/members/:id', {
      controller: 'MembersController',
      templateUrl: 'view/members.php'
    })
    .when('/leaderboard', {
      controller: 'LeaderboardController',
      templateUrl: 'view/leaderboard.php'
    })
});
