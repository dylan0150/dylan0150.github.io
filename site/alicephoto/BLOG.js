app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams.id;
  $scope.entrys = [

    {
      title: "one",
      intro: "two",
      date: "three",
      tagphoto: "",
    },
    {
      title: "one",
      intro: "two",
      date: "three",
      tagphoto: "",
    },
    {
      title: "one",
      intro: "two",
      date: "three",
      tagphoto: "",
    },

  ];
})
