app.controller('IndexController', function($scope, $route, $routeParams, $location) {
  $scope.name = "IndexController";
  $scope.$route = $route;
  $scope.$location = $location;
  $scope.$routeParams = $routeParams;
})

app.controller('_Controller', function($scope, $routeParams) {
  $scope.name = '_Controller';
  $scope.params = $routeParams;
})
