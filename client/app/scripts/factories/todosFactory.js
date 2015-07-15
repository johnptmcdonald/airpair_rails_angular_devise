(function() {
    'use strict';

    angular
        .module('clientApp')
        .factory('todosFactory', todosFactory);

    todosFactory.$inject = ['$http'];

    function todosFactory($http) {
    	console.log("todosFactory loading")

    	var baseUrl = "/api/todos";

        var service = {
            getTodos: getTodos
        };
        return service;

        ////////////////

        function getTodos() {
        	return $http.get(baseUrl)
        }

    }
})();