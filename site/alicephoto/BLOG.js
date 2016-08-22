app.controller('BlogController', function($scope, $routeParams) {
  $scope.name = 'BlogController';
  $scope.params = $routeParams.id;
  $scope.entrys = [

    {
      title: "The Start of a Long Summer!",
      intro: "My big summer project!",
      date: "14/05/2016",
      tagphoto: "image/blog/1.jpg",
      content: [
        {
          heading: "Hello! So this weekend I've been busy at work getting the musicians of Manchester together to help out on my project!",
          content: "",
          photo: {
            location: "",
            url: "image/blog/1.jpg",
            comment: "[spunge] Gig",
            date: "",
          }
        },

        {
          heading: "",
          content: "So far I've got over 20 eager to help me out! Throughout my journey I will be keeping this blog, a vlog on YouTube and putting all the photos on my Facebook page!",
          photo: [
            {
              location: "",
              url: "image/blog/1.jpg",
              comment: "[spunge] Gig",
              date: "",
            },
          ]
        },

        {
          heading: "",
          content: "I'll see you on the next post!",
          photo: [
            {
              location: "",
              url: "image/blog/1.jpg",
              comment: "[spunge] Gig",
              date: "",
            },
          ]
        },

      ]
    },
  ];
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
