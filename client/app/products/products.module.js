'use strict';

var Product = angular.module('Product', []);

Product.controller('productCtrl', ['$scope', '$http'], function ($scope, $http) {
	$scope.store = function(product){
		console.log(product)
	}
	return $scope;
})
