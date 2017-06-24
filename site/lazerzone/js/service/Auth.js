app.service('auth', function($http, $q) {

  return {
    server: function() {
      return $q( function(resolve, reject) {
        reject()
      })
    }, //rejects if cannot auth with server - for things where you MUST have online authentication
    client: function() {
      return $q( function(resolve, reject) {
        reject()
      })
    } //falls back to server if cannot find usable local auth - offline authentication
  }
})
