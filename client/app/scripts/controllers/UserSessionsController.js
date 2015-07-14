(function() {
    'use strict';

    angular
        .module('clientApp')
        .controller('UserSessionsController', UserSessionsController);

    UserSessionsController.$inject = ['$auth'];

    /* @ngInject */
    function UserSessionsController($auth) {
        var vm = this;


    }
})();