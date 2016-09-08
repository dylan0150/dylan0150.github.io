angular.module('app.directive.card',[])
  .directive('appCard', function(){
    return{
      restrict: 'E',
      controller: function($scope){
        console.log('appCard directive load');
      }
    }
  });
