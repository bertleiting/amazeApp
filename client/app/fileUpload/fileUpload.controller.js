'use strict';

angular.module('bt2App')
  .controller('productUploadCtrl', ['$scope', 'Upload', '$timeout', function ($scope, $modal, Upload, $timeout) {
    $scope.upload = function (dataUrl) {
        //Upload.base64DataUrl(dataUrl).then(function(urls){return {product: urls}});

        Upload.upload({
            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
            data: {
                file: Upload.dataUrltoBlob(dataUrl)
            },
        }).then(function (response) {
            $timeout(function () {
                $scope.result = response.data;
            });
        }, function (response) {
            if (response.status > 0) $scope.errorMsg = response.status 
                + ': ' + response.data;
        }, function (evt) {
            $scope.progress = parseInt(100.0 * evt.loaded / evt.total);
        });
        
    }
  $scope.close = function () {
    close()
  }
}]);