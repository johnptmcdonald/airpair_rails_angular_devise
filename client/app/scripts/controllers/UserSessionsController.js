(function() {
    'use strict';

    angular
        .module('clientApp')
        .controller('UserSessionsController', UserSessionsController);

    UserSessionsController.$inject = ['$scope', '$rootScope'];

    /* @ngInject */
    function UserSessionsController($scope, $rootScope) {
        var vm = this;
        vm.errors;

        console.log($rootScope.user);

        $scope.$on('auth:login-error', function(event, reason){
        	vm.error = reason.errors[0];
            console.log(event)
        })

    }
})();