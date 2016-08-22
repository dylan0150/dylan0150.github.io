var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: 'page/main.html'
    })
    .when('/main', {
      controller: 'MainController',
      templateUrl: 'page/main.html'
    })
    .when('/blog', {
      controller: 'BlogController',
      templateUrl: 'page/blog.html'
    })
    .when('/photo', {
      controller: 'PhotoController',
      templateUrl: 'page/photography.html'
    })
    .when('/about', {
      controller: 'AboutmeController',
      templateUrl: 'page/aboutme.html'
    })
    .when('/blog/:id', {
      controller: 'BlogController',
      templateUrl: 'blog/blog.html'
    })
});

app.controller('MainController', function($scope, $route, $routeParams, $location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
})

app.controller('AboutmeController', function($scope, $routeParams) {
  $scope.name = 'AboutmeController';
  $scope.params = $routeParams;
})
