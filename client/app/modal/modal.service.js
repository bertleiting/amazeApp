'use strict';

angular.module('bt2App.admin')
  .service('modalService', ['$modal',
    function ($modal) {

        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: '/app/partials/modal.html'
        };

        var modalOptions = {
            closeButtonText: 'Annuleren',
            actionButtonText: 'OK',
            headerText: 'Doorgaan?',
            bodyText: 'Wilt u deze actie uitvoeren?'
        };

        this.addProduct = function (customModalDefaults, customModalOptions) {
            
        var modalDefaults = {
            backdrop: true,
            keyboard: true,
            modalFade: true,
            templateUrl: '/app/partials/addModal.html'
        };

        var modalOptions = {
            closeButtonText: 'Annuleren',
            actionButtonText: 'OK',
            headerText: 'Product toevoegen:'
        };


            return this.show(modalDefaults, modalOptions);
        };        

        this.showModal = function (customModalDefaults, customModalOptions) {
            if (!customModalDefaults) customModalDefaults = {};
            customModalDefaults.backdrop = 'static';
            return this.show(customModalDefaults, customModalOptions);
        };

        this.show = function (customModalDefaults, customModalOptions) {
            //Create temp objects to work with since we're in a singleton service
            var tempModalDefaults = {};
            var tempModalOptions = {};

            //Map angular-ui modal custom defaults to modal defaults defined in service
            angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);

            //Map modal.html $scope custom properties to defaults defined in service
            angular.extend(tempModalOptions, modalOptions, customModalOptions);

            if (!tempModalDefaults.controller) {
                tempModalDefaults.controller = function ($scope, $modalInstance) {
                    $scope.modalOptions = tempModalOptions;
                    $scope.modalOptions.ok = function (result) {
                        $modalInstance.close(result);
                    };
                    $scope.modalOptions.close = function (result) {
                        $modalInstance.dismiss('cancel');
                    };
                }
            }

            return $modal.open(tempModalDefaults).result;
        };


    }]);