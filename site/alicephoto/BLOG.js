app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams;
  $scope.entry = [
    {
      id: 1,
      url: "blog/blog1.html",
      date: "",
      title: "",
    },
    {
      id: 2,
      url: "blog/blog2.html",
      date: "",
      title: "",
    },
    {
      id: 3,
      url: "blog/marchblog.html",
      date: "",
      title: "",
    },
  ]
})
