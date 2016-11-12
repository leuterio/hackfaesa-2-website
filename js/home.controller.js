(function() {
'use strict';

    angular
        .module('hackfaesa')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];
    function HomeController($scope) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { 
            vm.titulo = "OrtBook"
        }
    }
})(angular);

