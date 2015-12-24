'use strict';

(function() {

class AdminController {

  constructor(User, $http, $scope, socket, $modal, modalService) {
    
    // Use the User $resource to fetch all users
    this.users = User.query();
    this.$http = $http;
    
    this.modal = $modal;

   // this.products = Products.API.list();
console.log();
    this.modalService = modalService;
    //this.allProducts = this.API.list();

    $http.get('/api/products').then(response => {
      this.allProducts = response.data;
      socket.syncUpdates('product', this.allProducts);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('product');
    });
}


  delete(user) {
  	console.log('click');
    //user.$remove();
    //this.users.splice(this.users.indexOf(user), 1);
  }

  addProduct() {
  	//$this.$http
    this.modalService.addProduct().then(function (result) {
    	//$this.$http
console.log(Product)
    		Product.store(result);
    		//this.$http.post('/api/products', { result });
           // dataService.deleteCustomer($scope.customer.id).then(function () {
            //    $location.path('/customers');
            });
        
    
    /* 
                    templateUrl: '../../assets/html/addModal.html',
                    controller: 'productUploadCtrl'
                });
             */    
    };
}
  	
    /* if (this.name) {
        	console.log(this.newProduct);
          this.$http.post('/api/products', {name: this.name,
                                             menu: this.menu,
                                             category: this.category});
          this.name = '';
        } */

angular.module('bt2App.admin')
  .controller('AdminController', AdminController);

})();
