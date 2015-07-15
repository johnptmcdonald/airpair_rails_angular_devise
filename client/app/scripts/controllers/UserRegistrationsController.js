(function() {
    'use strict';

    angular
        .module('clientApp')
        .controller('UserRegistrationsController', UserRegistrationsController);

    UserRegistrationsController.$inject = ['$auth', '$scope', '$rootScope'];

    /* @ngInject */
    function UserRegistrationsController($auth, $scope, $rootScope) {
        var vm = this;
        vm.handleRegistrationButton = handleRegistrationButton;

        function handleRegistrationButton(registrationForm){
        	$auth.submitRegistration(registrationForm)
        		.success(function(){
        			$auth.submitLogin({email: registrationForm.email, password: registrationForm.password})
        		})
        }

        $scope.$on('auth:registration-email-error', function(event, reason){
        	vm.errors = reason.errors.full_messages;
        })
    }
})();