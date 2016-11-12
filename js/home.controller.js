(function() {
'use strict';

    angular
        .module('hackfaesa')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'HomeService'];
    function HomeController($scope, HomeService) {
        var vm = this;
        vm.itemBusca = {};
        vm.userLogin = {};
        vm.userCadastro = {};
        vm.items = [];
        vm.modalCadastro = vm.modalLogin = vm.modalAjuda = false;

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
            vm.items = HomeService.getAnumcios();
            let arrayAux = [];
            function filtraItens(item, index){
                if(vm.itemBusca.onde){
                    if(item.endereco && item.endereco.toLowerCase().indexOf(vm.itemBusca.onde.toLowerCase()) !== -1){
                        return item;
                    }
                }
                if(vm.itemBusca.tipo){
                    if(item.tipoAnuncio && item.tipoAnuncio == vm.itemBusca.tipo){
                        return item;
                    }
                }
                if(vm.itemBusca.data){
                    if(
                        (item.dateInicio && item.dateInicio >= vm.itemBusca.inicio && item.dataExpira && item.dataExpira <= vm.itemBusca.fim) 
                            || (item.dataExpira && item.dataExpira <= vm.itemBusca.fim) ){
                        return item;
                    }
                }
            }
            arrayAux = vm.items.reduce(filtraItens, arrayAux);
            debugger;
            vm.items = arrayAux;
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

