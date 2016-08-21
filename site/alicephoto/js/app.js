var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
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
});

app.controller('MainController', function($scope, $route, $routeParams, $location) {
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
})

app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams;
})

app.controller('PhotoController', function($scope, $routeParams) {
  $scope.name = 'PhotoController';
  $scope.params = $routeParams;
})

app.controller('AboutmeController', function($scope, $routeParams) {
  $scope.name = 'AboutmeController';
  $scope.params = $routeParams;
})
