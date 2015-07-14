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

        console.log($rootScope.user);

        function handleRegistrationButton(registrationForm){
        	$auth.submitRegistration(registrationForm)
        		.then(function(){
        			$auth.submitLogin({email: registrationForm.email, password: registrationForm.password})
        				.then(function(data){
        					console.log(data);
        				})
        		})
        }

        $scope.$on('auth:registration-email-error', function(event, reason){
        	vm.errors = reason.errors.full_messages;
        })
    }
})();