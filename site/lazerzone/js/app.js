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

    .state('booking', {
      url: '/booking',
      templateUrl: 'templates/booking.html',
      controller: 'bookingCtrl',
      resolve: {

      }
    })

  $urlRouterProvider
    .otherwise('/home')
})
