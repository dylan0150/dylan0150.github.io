var app = angular.module("scrabbleApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'php/view/main.php'
    })
    .when('/main', {
      controller: 'MainController',
      templateUrl: 'php/view/main.php'
    })
    .when('/members', {
      controller: 'MembersController',
      templateUrl: 'php/view/members.php'
    })
    .when('/members/:id', {
      controller: 'EditMemberController',
      templateUrl: 'php/view/editmember.php'
    })
    .when('/leaderboard', {
      controller: 'LeaderboardController',
      templateUrl: 'php/view/leaderboard.php'
    })
});
