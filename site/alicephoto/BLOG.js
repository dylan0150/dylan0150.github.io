app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams;
  $scope.entrys = [

    {
      title: "",
      intro: "",
      date: "",
      tagphoto: "",
    },

  ];
  $scope.currententrys = $scope.entrys[$routeParams.id];
})
