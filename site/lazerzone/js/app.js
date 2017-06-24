var app = angular.module('app', [
  'ui.router'
])

.run(function($rootScope, $state, $http, auth) {
  $rootScope.$on('$stateChangeStart', function(evt, to, toparams, fromstate, fromparams, options) {
    switch (to.name) {
      case 'login': auth.client().then(function(response) {
          evt.preventDefault()
          $state.go('bookings')
        }); break;
      default     : auth.client().then(function(response) {
        //...do nothing...
      }, function(response) {
        evt.preventDefault()
        $state.go('login')
      })
    }
  })
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('bookings', {
      url: '/bookings',
      templateUrl: 'templates/bookings.html',
      controller: 'bookingsCtrl',
      resolve: {

      }
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl',
      resolve: {

      }
    })

    .state('members', {
      url: '/members',
      templateUrl: 'templates/members.html',
      controller: 'membersCtrl',
      resolve: {

      }
    })

    .state('staff', {
      url: '/staff',
      templateUrl: 'templates/staff.html',
      controller: 'staffCtrl',
      resolve: {

      }
    })

  $urlRouterProvider
    .otherwise('/login')
})
