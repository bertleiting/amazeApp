'use strict';

angular.module('bt2App')
  .controller('Products', function ($http, $scope, socket) {
    

    var currentProduct = {};
        this.productList = [];


    var API = {

      get() {

      },

      store() {

      },

      list() {
        $http.get('/api/products').then(response => {
          console.log(response)
          this.productList = response.data;
          //socket.syncUpdates('product', this.productList);
          return response.data;
        });
      },

      remove() {

      }
    }
    
})