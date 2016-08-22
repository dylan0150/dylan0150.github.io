app.controller('PhotoController', function($scope, $routeParams) {
  $scope.name = 'PhotoController';
  $scope.params = $routeParams;
  $scope.photos = [
    {
      location: "location",
      url: "image/myart/1.jpg",
      comment: "comment",
      date: "date",
    },
    {
      location: "location",
      url: "image/myart/2.jpg",
      comment: "comment",
      date: "date",
    },
    {
      location: "location",
      url: "image/myart/3.jpg",
      comment: "comment",
      date: "date",
    },
    {
      location: "location",
      url: "image/myart/4.jpg",
      comment: "comment",
      date: "date",
    },
    {
      location: "location",
      url: "image/myart/5.jpg",
      comment: "comment",
      date: "date",
    },
    {
      location: "location",
      url: "image/myart/6.jpg",
      comment: "comment",
      date: "date",
    },
  ]
})
