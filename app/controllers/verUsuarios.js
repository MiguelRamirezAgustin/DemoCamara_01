
function verUsuarios(e){
//consulta de usuarios con metodo get
      var url="https://api.cloud.appcelerator.com/v1/users/query.json?key=osLPdnTb5dq1f7qZnvalENoEk1b1TRkI&pretty_json=true&count=true";
     var xhr=Ti.Network.createHTTPClient({
         onload:function(){
          
          var result=JSON.parse(this.responseText);
           
          //alert(JSON.stringify(result));

          for(var i=0; i<result.response.users.length; i++){

                var viewUsauario=Ti.UI.createView({
                      width:"100%",
                      height:"20%",
                      backgroundColor:"#8A86FB",
                      borderRadius:5,
                      borderColor:"blue",
                      layout:"vertical",
                      borderColor:"white"
                });
                $.scrollviews.add(viewUsauario);
                
                var labelicono=Ti.UI.createLabel({
                   top:'2%',
                   color:"white",
                   left:"5%",
                   backgroundImage:'/images/chico.png',
                   height:"25%",
                   width:"12%"
                });
                viewUsauario.add(labelicono);

                var labelN=Ti.UI.createLabel({
                  top:'2%',
                  color:"white",
                  left:"5%",
                  text:'Nombre: '+result.response.users[i].username,
                  font:{
                        fontSize:15
                  }
               });
               viewUsauario.add(labelN);

                var labelApellidoP=Ti.UI.createLabel({
                   color:"white",
                   left:"5%",
                   text:'Apellido Paterno: '+result.response.users[i].first_name,
                   font:{
                         fontSize:15
                   }
                });
                viewUsauario.add(labelApellidoP);

                var labelApellidoM=Ti.UI.createLabel({
                   color:"white",
                   left:"5%",
                   text:'Apellido Materno: '+result.response.users[i].last_name,
                   font:{
                         fontSize:15
                   }
                });
                viewUsauario.add(labelApellidoM);   

                var labelCorreo=Ti.UI.createLabel({
                  color:"white",
                  left:"5%",
                  text:'Administrador: '+result.response.users[i].admin,
                  font:{
                        fontSize:15
                  }
               });
               viewUsauario.add(labelCorreo); 
          }

         },
         onerror:function(e){
            alert(e.error);
         },
         timeout:3000
     });
     xhr.open('GET', url);
     xhr.send();
};

verUsuarios();