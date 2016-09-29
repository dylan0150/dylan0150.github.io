var app = angular.module("scrabbleApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'html/view/main.html'
    })
    .when('/main', {
      controller: 'MainController',
      templateUrl: 'html/view/main.html'
    })
    .when('/members', {
      controller: 'MembersController',
      templateUrl: 'html/view/members.html'
    })
    .when('/members/:id', {
      controller: 'MembersController',
      templateUrl: 'html/view/members.html'
    })
    .when('/leaderboard', {
      controller: 'LeaderboardController',
      templateUrl: 'html/view/leaderboard.html'
    })
});
