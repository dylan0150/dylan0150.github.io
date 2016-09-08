angular.module('app.directive',[])

.directive('appCard', function(){
  return{
    restrict: 'E',
    controller: function($scope){

    },
    scope:{
      data: '=',
    },
    templateUrl: 'templates/card.html',
    replace: true,
  }
});
