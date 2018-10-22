
$.arguments.addEventListener('click', function(){
   var passParametros= {
          'textoNombre':$.campoTexto.getValue(),
          'textoApellidos':$.campoTexto1.getValue(),
          'textoDireccion':$.campoTexto2.getValue(),
          'textoOcupacion':$.campoTexto3.getValue(),
   };

   var newWindow = Alloy.createController('proper', passParametros).getView();
   newWindow.open();
});


//parar parametros mediante properties
$.properties.addEventListener('click', function(e){
  //variable de lo que se va a pasar
    var pasarParametros={
     'textoNombre':$.campoTexto.getValue(),  //campo donde se escribe el texto que se pasara
     'textoApellidos':$.campoTexto1.getValue(),
     'textoDireccion':$.campoTexto2.getValue(),
     'textoOcupacion':$.campoTexto3.getValue(),
    };
          

       //Ti.App.Properties.setString('paramsPropertie', JSON.stringify(passParams));                                                             
       Ti.App.Properties.setString('paramsPropertie', JSON.stringify(pasarParametros));
      
     // se manda a llamar la pantalla donde se mostrara la informacion
    var newwindow=Alloy.createController('proper').getView();
    newwindow.open();
});


