

$.btnConsulta.addEventListener('click', function(e){
      if($.textFielUsuario.getValue() =='' && $.textFieldContraseña.getValue() ==''){
               alert('No a ingresado datos \nusuario \ncontraseña');
              // $.textFieldContraseña.style.setBorderColor("red");
              // $.textFielUsuario.style.setBorderColor("red");
      }else{
     var xhr =Ti.Network.createHTTPClient({
     onload:function(e){
         
      var result=JSON.parse(this.responseText);
      //alert(JSON.stringify(result));
      alert('Usuario y contraseña correcta');
      setTimeout(function(){
       var acceso=Alloy.createController('usuarios').getView();
       acceso.open();
      },1000); 
    },
     onerror:function(e){
         alert('Usuaro y contraseña incorrecta');
         //$.textFieldContraseña.style.setBorderColor("red");
         //$.textFielUsuario.style.setBorderColor("red");
        //alert(e.error)
        //Ti.API.info(e.error);
   },
   timeout:5000
  });
    xhr.open('POST', 'https://api.cloud.appcelerator.com/v1/users/login.json?key=osLPdnTb5dq1f7qZnvalENoEk1b1TRkI&pretty_json=true');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send({
          login:$.textFielUsuario.getValue(), 
          password:$.textFieldContraseña.getValue()
     }); 
    } 
});
