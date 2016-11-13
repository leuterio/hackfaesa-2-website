var map;
var chave = 'AIzaSyBtDbeEPMIUBPWCHiXwmOSgDjLAFKkpZv4';

function initialize() {
    var latlng = new google.maps.LatLng(-20.2582231, -40.52878999999999);
 
    var options = {
        zoom: 10,
        center: latlng,
        mapTypId: google.maps.MapTypeId.ROADMAP
    };
 
    map = new google.maps.Map(document.getElementById("mapa"), options);
}

function carregarPontos() {
 
    $.getJSON('js/pontos.json', function(pontos) {
 
        $.each(pontos, function(index, ponto) {
 
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
                title: "Meu ponto personalizado! :-D",
                map: map
            });
 
        });
 
    });
 
}
 
initialize();

