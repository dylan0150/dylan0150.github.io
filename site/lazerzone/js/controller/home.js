app.controller('homeCtrl', function($scope,$state) {
  $scope.state = $state
  $scope.tabs = [
    {
      name:'Booking',
      state:'booking'
    }
  ]
})
