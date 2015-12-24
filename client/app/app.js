'use strict';

angular.module('bt2App', [
  'bt2App.auth',
  'bt2App.admin',
  'bt2App.constants',
  'Product',
  'ngCookies',
  'ngFileUpload',
  'ngImgCrop',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
