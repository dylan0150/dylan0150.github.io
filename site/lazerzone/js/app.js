var app = angular.module('app', [
  'ui.router'
])

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl',
      resolve: {

      }
    })

  $urlRouterProvider
    .otherwise('/home')
})
