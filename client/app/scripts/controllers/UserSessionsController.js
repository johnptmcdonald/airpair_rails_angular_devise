(function() {
    'use strict';

    angular
        .module('clientApp')
        .controller('UserSessionsController', UserSessionsController);

    UserSessionsController.$inject = ['$scope'];

    /* @ngInject */
    function UserSessionsController($scope) {
        var vm = this;
        vm.errors;

        $scope.$on('auth:login-error', function(event, reason){
        	vm.error = reason.errors[0];
        })

    }
})();