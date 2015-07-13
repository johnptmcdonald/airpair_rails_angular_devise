(function() {
    'use strict';

    angular
        .module('clientApp')
        .controller('MainController', MainController);

    // MainController.$inject = ['dependencies'];

    /* @ngInject */
    function MainController() {
        var vm = this;

	    vm.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];

        activate();

        ////////////////

        function activate() {
        }
    }
})();


