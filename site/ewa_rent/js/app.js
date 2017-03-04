var app = angular.module('rentApp', [
  'ui.router'
])

  .config(function($stateProvider, $urlRouterProvider) {
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
