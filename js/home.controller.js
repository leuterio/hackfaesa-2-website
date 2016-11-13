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
        vm.userLogin = {
            nomeUsuario: "José da silva",
            telefone: '(27) 992713462',
            email: 'jose@silva.net',
            endereco: 'avenida um numero 6'
        };
        vm.userCadastro = {};
        vm.items = [];
        vm.itemCadastro = {
            fotos:['img/produtos/v_palio-web.png', 'img/produtos/p_cafe-web.png']
        };
        vm.modalMenbro = vm.modalCadastrar = vm.modalLogin = vm.modalAjuda = false;
        vm.locais = ['Marechal Floriano', 'Domingos Martins', 'Rio Bananal'];
        vm.openMap = true;



        activate();

        ////////////////
        function openCadastro(){
            vm.modalCadastrar = true;
        }
        function closeCadastro(){
            vm.modalCadastrar = false;
        }
        function efetuarCadastro(item){
            vm.items.push(JSON.parse(JSON.stringify(vm.itemCadastro)));
            vm.itemCadastro = {};
            vm.modalCadastrar = false;
        }
        function menbro(){
            vm.modalMenbro = true;
        }
        function fecharMenbro(){
            vm.modalMenbro = false;
        }
        function efetuarCadastroMenbro(){
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
            vm.logado = true;
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
            obterLatLong();
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

        function obterLatLong(){
            let cordenadas = [];
            vm.items.forEach(function(item){
                if(item.endereco){
                  getLatLong(item, item.endereco);
                }else{
                    if(item.enderecoDestino)
                      getLatLong(item, item.enderecoDestino);
                }
            });
        }
        function getLatLong(item, endereco){
            HomeService.obterLatLong(endereco).then(function(data){
                item.lat = data.results[2] ? data.results[2].geometry.location.lat : '';
                item.lng = data.results[2] ? data.results[2].geometry.location.lng : '';
                console.log(vm.items);
            });
        }

        function activate() { 
            vm.titulo = "Agribook."
            
            vm.acessar = acessar;
            vm.fecharLogin = fecharLogin;
            vm.efetuarLogin = efetuarLogin;

            vm.ajuda = ajuda;
            vm.fecharAjuda = fecharAjuda;
            vm.buscar = buscar;
            
            vm.menbro = menbro;
            vm.fecharMenbro = fecharMenbro;
            vm.efetuarCadastroMenbro = efetuarCadastroMenbro;

            vm.closeCadastro = closeCadastro;
            vm.openCadastro = openCadastro;
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

