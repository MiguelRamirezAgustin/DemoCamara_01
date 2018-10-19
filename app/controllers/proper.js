

setTimeout(function(){
    //variables para convertir el objeto a json
    var demoProperties=Ti.App.Properties.getString('paramsPropertie');
    var objetoProperties=JSON.parse(demoProperties);
     
    alert('Datos del usuario:\n'+ objetoProperties.textoNombre +
                            ',\n '+ objetoProperties.textoApellidos +
                            ',\n '+ objetoProperties.textoDireccion +
                            ',\n '+ objetoProperties.textoOcupacion);


     var image=Ti.UI.createImageView({
        top:"10%",
        width:'15%',
        height:'15%',
        image:'/images/chico.png',
     });
     $.view3.add(image);

     var listView=Ti.UI.createListView();


  /*  var label= Ti.UI.createLabel({
      top:"10%",
      color:"red",
      text:objetoProperties.texto + objetoProperties.texto2,
    });

   // $.view3.add(label);*/



    Ti.App.Properties.setString('paramsPropertie',null);
},3000);


