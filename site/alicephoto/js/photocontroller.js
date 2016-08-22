app.controller('PhotoController', function($scope, $routeParams) {
  $scope.name = 'PhotoController';
  $scope.params = $routeParams;
  $scope.photos = [
    {
      location: "[spunge] Gig",
      url: "image/myart/1.jpg",
      comment: "",
      date: "05-06-16",
    },
    {
      location: "Sound of Dream Gig",
      url: "image/myart/2.jpg",
      comment: "",
      date: "16-05-16",
    },
    {
      location: "Andrew Warner Gig",
      url: "image/myart/3.jpg",
      comment: "",
      date: "19-05-16",
    },
    {
      location: "Chris Tavener Gig",
      url: "image/myart/4.jpg",
      comment: "",
      date: "19-05-16",
    },
    {
      location: "Dog Coffee Gig",
      url: "image/myart/5.jpg",
      comment: "",
      date: "03-04-16",
    },
    {
      location: "Sound of Dream Gig",
      url: "image/myart/6.jpg",
      comment: "",
      date: "16-05-16",
    },
    {
      location: "",
      url: "image/myart/7.jpg",
      comment: "James Skeet",
      date: "16-05-16",
    },
    {
      location: "",
      url: "image/myart/8.jpg",
      comment: "Ethan Skimboarding",
      date: "",
    },
    {
      location: "Woolacombe Beach",
      url: "image/myart/9.jpg",
      comment: "",
      date: "",
    },
    {
      location: "",
      url: "image/myart/10.jpg",
      comment: "Erin",
      date: "",
    },
    {
      location: "",
      url: "image/myart/11.jpg",
      comment: "Ethan Skimboarding",
      date: "",
    },
    {
      location: "",
      url: "image/myart/12.jpg",
      comment: "Ethan",
      date: "",
    },
    {
      location: "",
      url: "image/myart/13.jpg",
      comment: "Frank Turner Gig",
      date: "23-11-15",
    },
    {
      location: "",
      url: "image/myart/15.jpg",
      comment: "Charlotte",
      date: "",
    },
    {
      location: "",
      url: "image/myart/16.jpg",
      comment: "Chris",
      date: "",
    },
    {
      location: "",
      url: "image/myart/17.jpg",
      comment: "Hidden Cabins Gig",
      date: "03-04-16",
    },
  ]
})
