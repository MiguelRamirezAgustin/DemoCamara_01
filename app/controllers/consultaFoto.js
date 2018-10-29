

function verFotos(){

    var clienteHTTP= Ti.Network.createHTTPClient({

    onload: function(){
         
        var result=JSON.parse(this.responseText);
         //vista de datos en alerta
        // alert(JSON.stringify(result));

         for(var i=0; i<result.response.photos.length; i++){
             
               var viewfotos=Ti.UI.createView({
                  width:"95%",
                  height:"18%",  
                  layout:"horizontal",
                  left:"1%"
               });
               $.scrollViewFotos.add(viewfotos);

               var viewImage=Ti.UI.createView({
                   left:0,
                   width:"30%",
                   heigth:"30%",
               });
               viewfotos.add(viewImage);

              var imageFotos= Ti.UI.createImageView({
                   width:"100%",
                   heigth:"100%",
                   top:"1%",
                   image:result.response.photos[i].urls.original,
               }) ;  
               viewImage.add(imageFotos);

               var viewInformacion=Ti.UI.createView({
                    width:"70%",
                    heigth:"100%",
               });
               viewfotos.add(viewInformacion);

             var labelFecha=Ti.UI.createLabel({
                   top:"50%",
                   left:"10%",
                   text:result.response.photos[i].exif.create_date,
                   color:"black",
                   font:{
                       fontSize:15
                   }
                
               });
               viewInformacion.add(labelFecha);
         }
      },
    onerror: function(e){
      alert('Error \n ' +e.error);  //alerta de error
    },
    timeout:6000,
    //progressbar();
    
 });

clienteHTTP.open('GET', 'https://api.cloud.appcelerator.com/v1/photos/query.json?key=osLPdnTb5dq1f7qZnvalENoEk1b1TRkI&pretty_json=true&count=true');
clienteHTTP.send();
}
verFotos();



function progressbar(e){
    var probresBar=Ti.UI.createProgessBar({
        top:20,
        width:250,
        max:6,
        value:0,
        color:"blue",
        messaje:"Descargando",
     });
     probresBar.addEventListener('click', function(){
       if(probresBar.value<probresBar.max){
           probresBar.messaje="descargando" + probresBar.value;
       }
     });
}



/*
exports.image = function(url, callback) {
    Ti.API.info('====== entra a caché');
    Ti.API.info(url);

    var filename = Ti.Utils.md5HexDigest(url);
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, filename + '.png');

    if (file.exists()) {
        Ti.API.info('==== existe ');
        callback(file.nativePath);
        file = null;
    } else {
        Ti.API.info('==== NO existe ');
        getRemoteFile(url, function(responseData) {
            var fileNew = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, filename + '.png');
            fileNew.write(responseData);
            callback(fileNew.nativePath);
            file = null;
            fileNew = null;
        });
    }

};

function getRemoteFile(url, success) {
    var http = Ti.Network.createHTTPClient({
        onload : function() {
            if (this.status == 200) {
                Ti.API.info('se pudo descargar');
                success(this.responseData);
            } else {
                console.log('no se pudo descargar');
            }
        },
        onerror : function(e) {
            console.log('entro en el error: ' + e.error);
        },
        timeout : 10000,
    });

    http.open('GET', url);
    http.send();


};*/