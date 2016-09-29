var app = angular.module("scrabbleApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'php/view/main.html'
    })
    .when('/main', {
      controller: 'MainController',
      templateUrl: 'php/view/main.html'
    })
    .when('/members', {
      controller: 'MembersController',
      templateUrl: 'php/view/members.php'
    })
    .when('/members/:id', {
      controller: 'MembersController',
      templateUrl: 'php/view/members.php'
    })
    .when('/leaderboard', {
      controller: 'LeaderboardController',
      templateUrl: 'php/view/leaderboard.php'
    })
});
