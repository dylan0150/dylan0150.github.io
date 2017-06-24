var Field = function(type,name,params) {
  if (type == undefined) throw new Error('field type required').stack;

  this.id       = Field.id++
  this.type     = type;
  this.valid    = true;
  this.required = false;
  this.disabled = false;
  this.error    = false;
  this.hidden   = false;
  this.errormsg = "";
  this.helpmsg  = "";
  this.label    = name != undefined ? name : '';
  this.name     = name != undefined ? name : type+'_'+this.id;

  switch (type) {
    case 'email':
      this.label    = "Email"
      this.name     = "email"
      this.required = true;
      break;
    case 'password':
      this.label    = "Password"
      this.name     = "password"
      this.required = true;
      break;
    case 'validate':
      if (params.validate == undefined) throw new Error('validate param required for field type validate').stack;
      this.type = params.validate[1];
      this.required = true;
      break;
    default:

  }

  if (params != undefined) {
    for (var key in params) {
      this[key] = params[key];
    }
  }
}
Field.id = 0

app.directive('dirField', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/field/field.html',
    scope: {
      field: '=field'
    },
    controller: function($scope, $rootScope) {

      $scope.form  = $scope.$parent.$parent.form
      $scope.$form = $scope.$parent.$parent[$scope.form.name]

      $rootScope.$on($scope.form.name+':field:value:change', function($rootEvent, field) {
        if (field.id == $scope.field.id) return;
        $scope.validate(field)
      })

      $scope.change = function() {
        console.log($scope.field)
        $scope.validate()
        $rootScope.$emit($scope.form.name+':field:value:change', $scope.field)
      }

      $scope.validate = function(changeField) {

      }

    }
  }
})
