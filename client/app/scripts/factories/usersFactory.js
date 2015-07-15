(function() {
    'use strict';

    angular
        .module('module')
        .factory('factory', factory);

    factory.$inject = ['$http'];

    /* @ngInject */
    function factory($http) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        	$http.get('/')
        }
    }
})();