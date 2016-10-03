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
      templateUrl: 'html/view/memberdetails.html'
    })
    .when('/editmember/:id', {
      controller: 'EditMembersController',
      templateUrl: 'html/view/editmember.html'
    })
    .when('/addnewmember', {
      controller: 'EditMembersController',
      templateUrl: 'html/view/addmember.html'
    })
    .when('/leaderboard', {
      controller: 'LeaderboardController',
      templateUrl: 'html/view/leaderboard.html'
    })
});
