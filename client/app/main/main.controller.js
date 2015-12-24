'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, Modal) {
    
    this.$http = $http;
    this.awesomeThings = [];
    this.Modal = Modal;

    $http.get('/api/things').then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  addThing() {
    if (this.newThing) {
      this.$http.post('/api/things', { name: this.newThing});
      this.newThing = '';
    }
  }

  deleteThing(thing) {
    //console.log(this.Modal)
    this.Modal.new.open();
//    this.Modal.confirm.delete(thing);
   // this.$http.delete('/api/things/' + thing._id);
  }
}

angular.module('bt2App')
  .controller('MainController', MainController);

})();
