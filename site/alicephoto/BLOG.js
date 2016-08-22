app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams;
  $scope.entrys = [

    {
      title: "one",
      intro: "two",
      date: "three",
      tagphoto: "",
      content: [
        {
          heading: "heading",
          text: "text",
          photos: [
            {
              location: "location",
              url: "",
              comment: "comment",
              date: "date",
            },
          ],
        },
      ],
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
