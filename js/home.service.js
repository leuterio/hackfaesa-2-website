(function() {
'use strict';

    angular
        .module('hackfaesa')
        .service('HomeService', HomeService);

    HomeService.$inject = ['$http'];
    function HomeService($http) {
        let anumciosJson = '[{"telefone": "3336-3636","endereco": "Rua A, s/n, Marechal Floriano, ES","titulo": "Bananas","diasDisponiveis": 12,"tipoAnuncio": 0,"descricao": "Banana tratada por camponeses treinados sem uso de agrotoxico e sem maltratar os animais","valorUnitario": 2,"nomeUsuario": "Rodrigo","produto": "Banana da terra","dataExpira": "12/11/2016","unidadeMedida": "KG","quantidadeTotal": 32,"fotos": ["img/produtos/p_banana-web.png"],"dateInicio": "12/11/2016","email": "rodrigo@email.com"},{"telefone": "3336-2020","endereco": "Rua B, N18, Campinhos, Domingos Martins - ES ","titulo": "Tomate","diasDisponiveis": 18,"tipoAnuncio": 0,"descricao": "Tomates sem agrotoxico e isentos de pelo de roedores","valorUnitario": 2.3,"nomeUsuario": "Carlos","produto": "Tomate","dataExpira": "12/01/2017","unidadeMedida": "KG","quantidadeTotal": 28,"fotos": ["img/produtos/p_tomate-web.png"],"dateInicio": "26/12/2016","email": "carlos@email.com"},{"telefone": "3336-2020","endereco": "Rua B, N18, Campinhos, Domingos Martins - ES ","titulo": "Melancia quadrada","diasDisponiveis": 0,"tipoAnuncio": 0,"descricao": "Distribua a famosa e exotica melancia quadrada, facil de transportar e vender.","valorUnitario": 3,"nomeUsuario": "Carlos","produto": "Melancia","unidadeMedida": "KG","quantidadeTotal": 120,"fotos": ["img/produtos/p_melancia-web.png"  ],"dateInicio": "06/01/2017","email": "carlos@email.com"},{"telefone": "3336-1212","endereco": "Rua C, N35, Campinhos, Domingos Martins - ES ","titulo": "O melhor café das montanhas","diasDisponiveis": 0,"tipoAnuncio": 0,"descricao": "O Melhor café produzido na região das montanhas capixabas, plantado e colhido na fazenda bela vista, ambiente familiar e cuidado com muito carinho e amor, aproveite a passagem para comer mixiricas colhidas na hora ou tomar uma xicara do mais saboroso café da região","valorUnitario": 3,"nomeUsuario": "Roberto","produto": "Café","unidadeMedida": "KG","quantidadeTotal": 180,"fotos": ["img/produtos/cafe1-web.png"],"email": "roberto@email.com"},{"telefone": "27 3456-1212","endereco": "Rua D, N32, Nova Venecia - ES","titulo": "Cafe Tradicao","diasDisponiveis": 0,"tipoAnuncio": 0,"descricao": "Cafe de altissima qualidade, colhido a partir das fezes do canario loiro, dando notas adocicadas naturais ao produto, prove e aprove antes de levar, venda minima de 20kg, consultar disponibilidade","valorUnitario": 4,"nomeUsuario": "Leonardo","produto": "Café","unidadeMedida": "KG","quantidadeTotal": 20,"fotos": ["img/produtos/p_cafe-web.png"],"email": "leonardo@email.com"},{"telefone": "27 3268-1421","endereco": "Rua Guarapari, N21, Pedra Azul - ES ","titulo": "Morango","diasDisponiveis": 0,"tipoAnuncio": 0,"descricao": "Morangos tradicionais selecionados, plantados na regiao de Pedra Azul, sem agrotóxico e utilizando as melhores praticas de plantio","valorUnitario": 3,"nomeUsuario": "Jorge","produto": "Morango","dataExpira": "02/03/2017","unidadeMedida": "KG","quantidadeTotal": 30,"fotos": ["img/produtos/p_morando-web.png"],"dateInicio": "02/02/2017","email": "jorge@email.com"},{"veiculo": "Fiorino","telefone": "27 3268-1421","enderecoDestino": "Rua L, N12, Vitoria - ES ","pesoMaximo": 1200,"titulo": "Fiorino Vazio","diasDisponiveis": 0,"tipoAnuncio": 1,"descricao": "Estarei voltando de um evento, de Venda Nova para Vitoria","nomeUsuario": "Joao Henrique","modeloTranspote": "BAU","dataExpira": "12/02/2017","volumeMaximo": 1.6,"enderecoOrigem": "Rua D, N32, Nova Venecia - ES ","fotos": ["img/produtos/v_fiurino-web.png"],"dateInicio": "02/02/2017","email": "joao_henrique@email.com"},{"veiculo": "Palio","telefone": "27 3268-1421","enderecoDestino": "Campo Grande, Cariacica - ES","pesoMaximo": 0,"titulo": "Palio 1.6","diasDisponiveis": 0,"tipoAnuncio": 1,"descricao": "Carro novo, com revisões em dia, sempre limpo e bem cuidado. Estarei em campinhos para o casamento da minha tia e estarei voltando para cariacica com porta malas vazio, como moro perto da CEASA, gostaria de voltar com carga","nomeUsuario": "Marcos","modeloTranspote": "PORTA-MALAS","dataExpira": "04/12/2016","volumeMaximo": 0.8,"enderecoOrigem": "Rua Joana Dark, Campinhos, Domingos Martins - ES ","fotos": ["img/produtos/v_palio-web.png"],"dateInicio": "01/12/2016","email": "Marcos@email.com"},{"veiculo": "Caminhão","telefone": "27 3268-5451","enderecoDestino": "Centro, Vila Velha- ES","pesoMaximo": 0,"titulo": "Caminhão Bau","diasDisponiveis": 0,"tipoAnuncio": 1,"descricao": "Voltando de transporte vazio","nomeUsuario": "Antonio","modeloTranspote": "Bau","dataExpira": "04/12/2016","volumeMaximo": 10,"enderecoOrigem": "Rua Juiz de fora, Aracruz - ES ","fotos": ["img/produtos/v_bau-web.png"],"dateInicio": "04/12/2016","email": "antnio@email.com"}]';

        this.getAnumcios = getAnumcios;
        this.getAnumciosFiltrados = getAnumciosFiltrados;
        
        ////////////////

        function getAnumcios() {
            return JSON.parse(anumciosJson);
         }
         function getAnumciosFiltrados(filtro){
            return JSON.parse(anumciosJson)
                .reduce(function(last, now){
                    if(filtro.onde){
                        if(now.endereco && now.endereco.toLowerCase().indexOf(filtro.onde.toLowerCase()) !== -1){
                            last.push(now);
                            return last;
                        }else{
                            return last;
                        }
                    }
                    if(filtro.tipo){
                        if(now.tipoAnuncio != undefined && now.tipoAnuncio != null && now.tipoAnuncio == parseInt(filtro.tipo)){
                            last.push(now);
                            return last;
                        }else{
                            return last;
                        }
                    }
                    if(filtro.data){
                        if(now.dateInicio && comparaStringData(now.dateInicio, filtro.data) || now.dataExpira && comparaStringData(now.dataExpira, filtro.data)){
                            last.push(now);
                            return last;
                        }else{
                            return last;
                        }
                    }

                    last.push(now);
                    return last;
                }, []);
         }
         function comparaStringData(texto, data){
            let array = texto.split("/");
            var dia = data.getDate();
            if (dia.toString().length == 1)
            dia = "0"+dia;
            var mes = data.getMonth()+1;
            if (mes.toString().length == 1)
            mes = "0"+mes;
            var ano = data.getFullYear(); 
            let aux = dia+"/"+mes+"/"+ano;
            return (texto.indexOf(aux) !== -1);
        }

    }
})();