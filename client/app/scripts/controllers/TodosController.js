(function() {
    'use strict';

    angular
        .module('clientApp')
        .controller('TodosController', TodosController);

    TodosController.$inject = ['$http', '$rootScope', '$auth'];

    /* @ngInject */
    function TodosController($http, $rootScope, $auth) {
        var vm = this;
         vm.todos = [];

         $auth.validateUser()
         	.then(function(data){
         		console.log(data)
         		$http.get('api/todos')
	         	.success(function(data){
	         		vm.todos = data;
	         		console.log(data);
	         	})
         	})



    }
})();