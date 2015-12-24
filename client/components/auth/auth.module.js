'use strict';

angular.module('bt2App.auth', [
  'bt2App.constants',
  'bt2App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
