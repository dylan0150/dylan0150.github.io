app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams.id;
  $scope.entrys = [

    entry1 = {
      title: "one",
      intro: "two",
      date: "three",
      tagphoto: "",
    },
    entry2 = {
      title: "one",
      intro: "two",
      date: "three",
      tagphoto: "",
    },
    entry3 = {
      title: "one",
      intro: "two",
      date: "three",
      tagphoto: "",
    },

  ];
})
