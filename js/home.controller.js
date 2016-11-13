(function() {
'use strict';

    angular
        .module('hackfaesa')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'HomeService'];
    function HomeController($scope, HomeService) {
        var vm = this;
        vm.itemBusca = {};
        vm.itemDetalhes = null;
        vm.userLogin = {};
        vm.userCadastro = {};
        vm.items = [];
        vm.modalCadastro = vm.modalLogin = vm.modalAjuda = false;
        vm.locais = ['Marechal Floriano', 'Domingos Martins', 'Rio Bananal'];

        activate();

        ////////////////
        function cadastrar(){
            vm.modalCadastro = true;
        }
        function fecharCadastro(){
            vm.modalCadastro = false;
        }
        function efetuarCadastro(){
            debugger;
            console.log(vm.userCadastro);
            //Cadastrar usuario;
            fecharCadastro();
        }

        function acessar() {
            vm.modalLogin = true;
        }
        function fecharLogin() {
            vm.modalLogin = false;
        }
        function efetuarLogin(){
            debugger;
            console.log(vm.userLogin);
            //Logar   
            fecharLogin();
        }

        function ajuda() {
            vm.modalAjuda = true;
        }
        function fecharAjuda() {
            vm.modalAjuda = false;
        }

        function buscar() {
            vm.items = HomeService.getAnumciosFiltrados(vm.itemBusca);
            debugger;
        }

        function detalhes(item){
            //show modal detalhes
            vm.itemDetalhes = item;
        }
        function fechaDetalhes(){
            vm.itemDetalhes = null;
        }

        function activate() { 
            vm.titulo = "Agribook."
            
            vm.acessar = acessar;
            vm.fecharLogin = fecharLogin;
            vm.efetuarLogin = efetuarLogin;

            vm.ajuda = ajuda;
            vm.fecharAjuda = fecharAjuda;
            vm.buscar = buscar;
            
            vm.cadastrar = cadastrar;
            vm.fecharCadastro = fecharCadastro;
            vm.efetuarCadastro = efetuarCadastro;

            vm.detalhes = detalhes;
            vm.fechaDetalhes = fechaDetalhes;



        }

        $scope.safeApply = function(fn) {
            var phase = this.$root.$$phase;
            if(phase == '$apply' || phase == '$digest') {
                if(fn && (typeof(fn) === 'function')) {
                fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    }
})(angular);

