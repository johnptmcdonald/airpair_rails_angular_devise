'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  
  .config([
    '$stateProvider', 
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('main', {
          url: '/main',
          templateUrl: '../views/main.html',
          controller: 'MainController as vm'
        });

      $urlRouterProvider.otherwise('main');

    }])
