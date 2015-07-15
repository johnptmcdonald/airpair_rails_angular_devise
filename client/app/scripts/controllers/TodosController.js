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

    }
})();