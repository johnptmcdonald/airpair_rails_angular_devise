(function() {
    'use strict';

    angular
        .module('clientApp')
        .controller('TodosController', TodosController);

    TodosController.$inject = ['$http', 'todosFactory'];

    /* @ngInject */
    function TodosController($http, todosFactory) {
        var vm = this;
        vm.todos = [];
        vm.todo;

        todosFactory.getTodos()
            .success(function(data, error){
                vm.todos = data;
            })

    }
})();