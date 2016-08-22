app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams;
  $scope.entrys = [

    {
      title: "The Start Of A Long Summer!",
      intro: "My big summer project!",
      date: "14/05/2016",
      tagphoto: "image/blog/face.jpg",
      content: [
        {
          heading: "",
          text: "Hello! So this weekend I've been busy at work getting the musicians of Manchester together to help out on my project!",
          photos: [
            {
              location: "",
              url: "image/blog/1.jpg",
              comment: "[spunge] Gig",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "So far I've got over 20 eager to help me out! Throughout my journey I will be keeping this blog, a vlog on YouTube and putting all the photos on my Facebook page!",
          photos: [
            {
              location: "",
              url: "image/blog/2.jpg",
              comment: "Sound Of Dream",
              date: "",
            },
          ],
        },
        {
          heading: "",
          text: "I'll see you on the next post!",
          photos: [
            {
              location: "",
              url: "image/blog/3.jpg",
              comment: "Andrew Warner",
              date: "",
            },
          ],
        },
      ],
    },

  ];
})
