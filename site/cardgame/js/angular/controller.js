app.controller('IndexController', function($scope, $route, $routeParams, $location) {
  $scope.name = "IndexController";
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
})
