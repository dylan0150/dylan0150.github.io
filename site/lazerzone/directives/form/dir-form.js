var Form = function(name,type,params) {
  if (name == undefined || type == undefined) throw new Error('form name and type required').stack;

  this.name     = name
  this.type     = type
  this.valid    = true
  this.disabled = false
  this.controls = []
  this.fields   = []
  this.method   = 'post'

  if (params != undefined) {
    this.method = params.method != undefined ? params.method : 'post';
    if (params.fields != undefined) {
      for (var i = 0; i < params.fields.length; i++) {
        this.fields.push(new Field(params.fields[i].type,params.fields[i]))
      }
    }
    if (params.controls != undefined) {
      for (var i = 0; i < params.controls.length; i++) {
        this.controls.push(new Field(params.controls[i].type,params.controls[i]))
      }
    }
  }

  switch (type) {
    case 'login':
      this.fields.push(new Field('email'))
      this.fields.push(new Field('validate','email_validate',{ validate: ['email','email'], label:'Re-enter Email' }))
      this.fields.push(new Field('password'))
      this.fields.push(new Field('validate','password_validate',{ validate: ['password','password'], label:'Re-enter Password' }))
      this.controls.push(new Form.Control('login'))
      break;
  }

  if (params != undefined) {
    for (var key in params) {
      if (key != 'fields') this[key] = params[key];
    }
  }
}

Form.Control = function(type,params) {
  if (name == undefined || type == undefined) throw new Error('control type required').stack;

  this.type     = type;
  this.valid    = true;
  this.disabled = false;

  switch (type) {
    case 'login':
      this.value = "Log In";
      this.type = "Submit";
    break;
  }

  if (params != undefined) {
    for (var key in params) {
      this[key] = params[key]
    }
  }
}

app.directive('dirForm', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/form/form.html',
    scope: {
      form: '=form'
    },
    controller: function($scope, $rootScope) {

      $scope.submit = function($event) {
        $rootScope.$emit($scope.form.name+':submit', $event, $scope.form)
      }

      for (var i = 0; i < $scope.form.controls.length; i++) {
        $scope.form.controls[i].click = function($event) {
          $rootScope.$emit($scope.form.name+':control:'+this.type, $event, $scope.form, this)
        }
      }

    }
  }
})
