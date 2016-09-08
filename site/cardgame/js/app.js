var app = angular.module("gameApp", ['ngRoute','ngAnimate',
    //DIRECTIVES//
  'app.directive.card',
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('', {
      controller: '',
      templateUrl: ''
    })
});
