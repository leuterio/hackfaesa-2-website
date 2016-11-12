(function() {
'use strict';

    angular
        .module('hackfaesa')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'HomeService'];
    function HomeController($scope, HomeService) {
        var vm = this;
        vm.itemBusca = {};
        vm.items = [];

        activate();

        ////////////////
        function acessar() {
            vm.modalLogin = true;
        }
        function fecharLogin() {
            vm.modalLogin = false;
        }
        function ajuda() {
            vm.modalAjuda = true;
        }
        function fecharAjuda() {
            vm.modalAjuda = false;
        }

        function buscar() {
            vm.items = HomeService.getAnumcios();
            function filtraItens(item, index){
                if(vm.itemBusca.onde){

                }
                if(vm.itemBusca.tipo){

                }
                if(vm.itemBusca.inicio){

                }
                if(vm.itemBusca.fim){

                }
            }
            vm.items = vm.items.map(filtraItens);
        }

        function activate() { 
            vm.titulo = "OrtBook"
            vm.acessar = acessar;
            vm.fecharLogin = fecharLogin;
            vm.ajuda = ajuda;
            vm.fecharAjuda = fecharAjuda;
            vm.buscar = buscar;

        }

    }
})(angular);

