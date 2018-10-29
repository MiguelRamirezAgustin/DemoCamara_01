
//codigo para crear usuario dando click al boton muestra campos para crear usuario 
var btn= Titanium.UI.createButton({
      title:'Crear Usuarios',
      width:'40%',
      height:"40%",
      left:"5%",
      top:"25%",
      borderRadius:5,
      backgroundColor:"white",
      color:"#7C77FA",
      borderColor:"white"
});
$.viewCrearUsuario.add(btn);

btn.addEventListener('click', function(e){
   var crearView=Ti.UI.createView({
      width:"100%",
      height:"100%",
      backgroundColor:"#8A86FB",
      borderColor:"black",
      layout:"vertical", 
      zIndex:1 
   });
   $.viewVerUsuario.add(crearView);
   

  var labelNombre=Ti.UI.createLabel({
      text:"Nombre:",
      color:"white",
      top:"0%",
      font:{
            fontSize:18
      }
   });
   crearView.add(labelNombre);

   var texFieldNombre=Ti.UI.createTextField({
      width:"55%",
      height:"7%",
      title:"Nombre",
      backgroundColor:"white",
      borderColor:"black",
      borderRadius:5,
      top:"0%",
      color:"black",
      maxLength:18,
   });
   crearView.add(texFieldNombre);



   var labelApellidoPaterno=Ti.UI.createLabel({
      text:"Apellido Paterno",
      color:"white",
      top:"2%",
      font:{
            fontSize:18
      }
   });
   crearView.add(labelApellidoPaterno);
   var textFielApellidoPaterno= Ti.UI.createTextField({
      width:"55%",
      height:"7%",
      title:"Apellido Paterno",
      backgroundColor:"white",
      borderColor:"black",
      borderRadius:5,
      top:"0%",
      color:"black",
      maxLength:20,
   });
   crearView.add(textFielApellidoPaterno);



   var labelApellidoMaterno=Ti.UI.createLabel({
      text:"Apellido Materno",
      color:"white",
      top:"3%",
      font:{
            fontSize:18
      }
   });
   crearView.add(labelApellidoMaterno);
   var textFielApellidoMaterno= Ti.UI.createTextField({
      width:"55%",
      height:"7%",
      title:"Apellido Materno",
      backgroundColor:"white",
      borderColor:"black",
      borderRadius:5,
      top:"0%",
      color:"black",
      maxLength:20,
   });
   crearView.add(textFielApellidoMaterno);
   


   var labelCorreo=Ti.UI.createLabel({
      text:"Correo:",
      color:"white",
      top:"3%",
      font:{
            fontSize:18
      }
   });
   crearView.add(labelCorreo);
   var textFieldEmail= Ti.UI.createTextField({
      width:"55%",
      height:"7%",
      title:"Correo:",
      backgroundColor:"white",
      borderColor:"black",
      borderRadius:5,
      top:"0%",
      color:"black",
      maxLength:25,
      keyboardType:Titanium.UI.KEYBOARD_TYPE_EMAIL
   });
   crearView.add(textFieldEmail);


   var labelContraseña=Ti.UI.createLabel({
      text:"Contraseña:",
      color:"white",
      top:"3%",
      font:{
            fontSize:18
      }
   });
   crearView.add(labelContraseña);
   var textFieldPassword= Ti.UI.createTextField({
      width:"55%",
      height:"7%",
      title:"contraseña",
      backgroundColor:"white",
      borderColor:"black",
      borderRadius:5,
      top:"0%",
      color:"black",
      maxLength:15,
      passwordMask:true,
   });
   crearView.add(textFieldPassword);



   var labelContraseñaconfirmar=Ti.UI.createLabel({
      text:"Confirmar Contraseña:",
      color:"white",
      top:"3%",
      font:{
            fontSize:18
      }
   });
   crearView.add(labelContraseñaconfirmar);
   var textFieldPasswordConfirmation= Ti.UI.createTextField({
      width:"55%",
      height:"7%",
      title:"Confirmar contraseña",
      backgroundColor:"white",
      borderColor:"black",
      borderRadius:5,
      top:"0%",
      color:"black",
      maxLength:15,
      passwordMask:true,
   });
   crearView.add(textFieldPasswordConfirmation);


  
   var btnAgregar=Ti.UI.createButton({
      height:"5%",
      width:"75%",
      backgroundColor:"white",
      title:"Crear",
      top:"7%",
      color:"black",
      borderRadius:5,
      borderColor:'white'
   });
   crearView.add(btnAgregar);
  
   //Agregar usuarios metodo post
   btnAgregar.addEventListener('click', function(e){

       //validacion de campos 
      if(texFieldNombre.getValue()== '' && textFielApellidoMaterno.getValue()=='' && textFielApellidoPaterno.getValue()==''
     && textFieldPassword.getValue()=='' && textFieldPasswordConfirmation.getValue()==''){
           alert('Los campos:\n Nombre: \nApellido Paterno y Materno: \nContraseña y confirmacion de contraseña: \nSON OBRIGATORIOS')
     }else{  
    var xhr=Ti.Network.createHTTPClient({
      onload:function(e){
             var result=JSON.parse(this.responseText);
            // alert(JSON.stringify(result)); ver texto que muestra
            alert('Usuario Creado\n ');
            
       },
       onerror:function(e){
             //alert(e.error);
             alert('Error no se puedo crear usuario\n Verifique la informacion ');
       },
       timeout:5000
    });
    xhr.open('POST', 'https://api.cloud.appcelerator.com/v1/users/create.json?key=osLPdnTb5dq1f7qZnvalENoEk1b1TRkI&pretty_json=true'); 
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send({
             username: texFieldNombre.getValue(),
             first_name: textFielApellidoPaterno.getValue(),
             last_name: textFielApellidoMaterno.getValue(),
             email: textFieldEmail.getValue(),
             password: textFieldPassword.getValue(),
             password_confirmation: textFieldPasswordConfirmation.getValue()
            });
        }
    });


});




//boton y campos para mostrar los usuarios
var btnMostraUsuario =Titanium.UI.createButton({
      title:'Ver usuarios',
      width:'40%',
      height:"40%",
      left:"6%",
      top:"25%",
      borderRadius:5,
      backgroundColor:"white",
      color:"#7C77FA",
      borderColor:"white"
 });
$.viewCrearUsuario.add(btnMostraUsuario);

btnMostraUsuario.addEventListener('click', function(e){
   var ver= Alloy.createController('verUsuarios').getView();
   ver.open();
});