app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams;
  $scope.entrys = [

    {
      title: "one",
      intro: "two",
      date: "three",
      tagphoto: "",
    },

  ];
  $scope.currententrys = $scope.entrys[$routeParams.id];
})
