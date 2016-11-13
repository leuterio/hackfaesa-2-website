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
        vm.itemPin = null;
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
        }

        function detalhes(item){
            fechaModalPin();
            vm.itemDetalhes = item;
        }
        function fechaDetalhes(){
            vm.itemDetalhes = null;
        }

        function selecionaPin(tipo){
            vm.items.forEach(function(item) {
                if(item.tipoAnuncio == tipo){
                    vm.itemPin = item;
                    return;       
                }
            }, this);
        }
        function fechaModalPin(){
            vm.itemPin = null;
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

            vm.selecionaPin = selecionaPin;
            vm.fechaModalPin = fechaModalPin;
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

