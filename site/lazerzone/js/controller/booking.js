app.controller('bookingCtrl', function($scope,$state) {
  $scope.state = $state

  $scope.book = function($event,form) {
    console.log($event)
    console.log(form)
  }
})
