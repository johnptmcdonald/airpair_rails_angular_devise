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
    'ngTouch',
    'ng-token-auth'
  ])
  
  .config([
    '$stateProvider', 
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('sign_in', {
          url: '/sign_in',
          templateUrl: '../views/user_sessions/new.html',
          controller: 'UserSessionsController as vm'
        })

        .state('sign_up', {
          url: '/sign_up',
          templateUrl: '../views/user_registrations/new.html',
          controller: 'UserRegistrationsController as vm'
        })

        .state('main', {
          url: '/main',
          templateUrl: '../views/main.html',
          controller: 'MainController as vm'
        });

      $urlRouterProvider.otherwise('main');

    }])

  .run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.$on('auth:login-success', function() {
    $location.path('/');
  });
}]);
