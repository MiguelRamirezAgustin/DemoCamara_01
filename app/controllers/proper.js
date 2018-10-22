

setTimeout(function(){
    //variables para convertir el objeto a json
    var demoProperties=Ti.App.Properties.getString('paramsPropertie');
    var objetoProperties=JSON.parse(demoProperties);

         var label=Ti.UI.createLabel({
           color:"black",
           top:'32%',
           height:Ti.UI.SIZE,
           text:'Nombre: '+objetoProperties.textoNombre,
           textAling:Ti.UI.TEXT_ALIGNMENT_CENTER,
         });

         var label1=Ti.UI.createLabel({
           color:'black',
           top:'37%',
           height:Ti.UI.SIZE,
           text:'Apellidos: '+objetoProperties.textoApellidos,
           textAling:Ti.UI.TEXT_ALIGNMENT_CENTER,
         });
         var label2=Ti.UI.createLabel({
           color:'black',
           top:'42%',
           height:Ti.UI.SIZE,
           text:'Direccion: ' + objetoProperties.textoDireccion,
           textAlig:Ti.UI.TEXT_ALIGNMENT_CENTER,
         });
         var label3=Ti.UI.createLabel({
           color:'black',
           top:'48%',
           height:Ti.UI.SIZE,
           text:'Ocupacion: ' + objetoProperties.textoOcupacion,
           textAlig:Ti.UI.TEXT_ALIGNMENT_CENTER,
         });

         $.view3.add(label);
         $.view3.add(label1);
         $.view3.add(label2);
         $.view3.add(label3);

      //alert(objetoProperties);
      alert('Datos del usuario:\n'+ objetoProperties.textoNombre +
                            ',\n '+ objetoProperties.textoApellidos +
                            ',\n '+ objetoProperties.textoDireccion +
                            ',\n '+ objetoProperties.textoOcupacion);


        var image=Ti.UI.createImageView({
        top:"10%",
        width:'30%',
        height:'20%',
        image:'/images/chico.png',
     });
     $.view3.add(image);
   /*
    Ti.App.Properties.setString('paramsPropertie',null);

            for(var i=0; i<objetoProperties.length; i++){
                if(objetoProperties!= undefined){
                    var label =Ti.UI.createLabel({
                        color:'black',
                        top:10,
                        text:objetoProperties[i].textoNombre,
                    //  text:objetoProperties.textoApellidos,
                    //  text:objetoProperties.textoDireccion,
                    //  text:objetoProperties.textoOcupacion,
                        height:Ti.UI.SIZE,
                    });
                    $.view3.add(label);
                }
            }
      */
},3000);



$.brnCerrar.addEventListener('click', function(e){
    $.windowPro.close();
});

$.brnMenu.addEventListener('click', function(){
   var modal=require('modalWindow.js').modalWin;
   var popupWin = new modal();
   popupWin.open();
});

$.brnSiguiente.addEventListener('click', function(e){
   var siguiente= Alloy.createController('viewService').getView();
   siguiente.open();
});

