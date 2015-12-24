'use strict';
/*
var ProductController = function ($http, $scope, socket, $modal, productService) {
    
    this.$http = $http;
    this.awesomeProducts = [];

    $scope.test = 'JAAAAAA';

    $http.get('/api/products').then(response => {
      this.awesomeProducts = response.data;
      socket.syncUpdates('product', this.awesomeProducts);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('product');
    });
}

var add = function() {
    if (this.newProduct) {
      this.$http.post('/api/products', { name: this.name,
                                         type: this.type,
                                         category: this.category});
      this.newProduct = '';
    }
  }

var deleteProduct = function(product) {
    this.$http.delete('/api/products/' + product._id);
  }
*/
angular.module('bt2App').controller('ProductController', ['$scope', '$http', 'socket', function($scope, $http, socket) {
  
  $scope.addProduct = function() {
    console.log('click')
  }
  
}]);