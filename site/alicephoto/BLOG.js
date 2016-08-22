app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams;
  $scope.entrys = [
    {
      id: 1
      title: "The Start of a Long Summer!",
      intro: "My big summer project!",
      date: "14/05/2016",
      url: "#/blog/:id",
      tagphoto: "image/blog/1.jpg",
      text: [
        {
          heading: "Hello! So this weekend I've been busy at work getting the musicians of Manchester together to help out on my project!",
          content: "",
        },
        {
          heading: "",
          content: "So far I've got over 20 eager to help me out! Throughout my journey I will be keeping this blog, a vlog on YouTube and putting all the photos on my Facebook page!",
        },
        {
          heading: "",
          content: "I'll see you on the next post!",
        },
      ],
      photo: [
        {
          location: "",
          url: "image/blog/1.jpg",
          comment: "[spunge] Gig",
          date: "",
        },
        {
          location: "",
          url: "image/blog/2.jpg",
          comment: "Sound of Dream",
          date: "",
        },
        {
          location: "",
          url: "image/blog/3.jpg",
          comment: "Andrew Warner",
          date: "",
        },
      ],
    },
  ]
})

/* START OF EXAMPLE ENTRY
{
  id: 1
  title: "",
  intro: "",
  date: "",
  url: "",
  tagphoto: "",
  text: [
    {
      heading: "",
      content: "",
    },
  ],
  photo: [
    {
      location: "",
      url: "",
      comment: "",
      date: "",
    },
  ],
},
END OF EXAMPLE ENTRY */
