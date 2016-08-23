app.controller('MainController', function($scope, $route, $routeParams, $location) {
  $scope.name = 'MainController'
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
})
