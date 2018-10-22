//consulta de datos
function obtenerDatos(cantidad){
    var url = "https://randomuser.me/api/?results=" + cantidad;
    var xhr=Ti.Network.createHTTPClient({
       //collback
        onload: function(e){
           crearContactos(JSON.parse(this.responseText).results);
        },
        onerror: function(e){
            Ti.API.info(e.error);
            alert('error' + e+ crearContactos());
        },
        timeout:500
    });
    xhr.open("GET", url);
    xhr.send();
};

function crearContactos(contactos){
    var items=[];
    contactos.forEach(function(contacto){
        items.push({
            nombre:{text:  contacto.name.first},
        });
    });
   // Ti.API.info(items);
    $.lisctcontactos.sections[0].setItems(items);
}
obtenerDatos(5);
