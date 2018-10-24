//consulta de datos
function obtenerDatos(cantidad){
    var url = "https://randomuser.me/api/?results=" + cantidad;
    var xhr=Ti.Network.createHTTPClient({
       //collback
        onload: function(e){ 	
           // crearContactos(JSON.parse(this.responseText).results); 
          
          var result=JSON.parse(this.responseText);
           for(var i=0; i<result.results.length; i ++){
           	 //if(result.results[i] !=undefined){___if para validar si el json esta vacia 
           	 	 // alert(JSON.stringify(result));------ alerta para mostrar la informacion de json
           	 	 
           	 	 //view general
           	 	var views= Ti.UI.createView({
           	 		width:"100%",
           	 		height:"18%",
           	 		backgroundColor:"#B0DEF7",
           	 		borderWidth:1,
           	 		borderColor:"orange",
           	 		borderRadius:5,
           	 		layout:"horizontal"
           	 	});
           	 	$.scrollview.add(views);
           	 		 
           	 	//view para imagen 
           	 	var viewimage=Ti.UI.createView({
           	 		width:"20%",
           	 		height:"70%",
           	 		left:"2%",
           	 		borderRadius:50,
           	 		top:"2%"
           	 	});
           	 	views.add(viewimage);
           	 	
           	 	//imagen
           	 	var images=Ti.UI.createImageView({
	           	 	 width:"100%",
	           	 	 height:"100%",
	           	 	 image:result.results[i].picture.medium, 
	           	 });
	           	 viewimage.add(images);
	           	  
	           	 //vista para infromacion
	           	 var viewInfo=Ti.UI.createView({
	           	 	width:"75%",
	           	 	height:"100%",
	           	 	top:"2%",
	           	 	layout:"vertical",
	           	 });
	           	 views.add(viewInfo);
	           	 
	           	 
	           	//label infomacion  
           	 	var label1=Ti.UI.createLabel({
           	 		color:"black",
					top:"2%",
					left:"5%",
           	 		text:'Nombre:  '+result.results[i].name.first,
           	 		height:Ti.UI.SIZE,
	           	 });
	           	 viewInfo.add(label1);
	           	
	            var labelcity= Ti.UI.createLabel({
	           	   color:'black',
	           	   left:"5%",
	           	   text:'Ciudad:  '+result.results[i].location.city,
	             });
	             viewInfo.add(labelcity);
	             
	             var labelcalle= Ti.UI.createLabel({
	             	color:"black",
	             	left:"5%",
	             	text:"Calle:  " + result.results[i].location.street,
	             });
	            viewInfo.add(labelcalle);
	            
	            var labelimal= Ti.UI.createLabel({
	           	  color:"black",
	           	  left:"5%",
	           	  text:'Email:  '+result.results[i].email,
	            }); 
	            viewInfo.add(labelimal);
	            
	            var labelphone= Ti.UI.createLabel({
	            	color:"black",
	            	left:"5%",
	            	text:'Telefono:  '+ result.results[i].phone,
	            });
	           viewInfo.add(labelphone);
	           
           	 }
           	 
           	

          //};____if para validar si el json esta vacia
        },
        onerror: function(e){
            //Ti.API.info(e.error);
            alert('Error' + e.error);
        },
        timeout:500
    });
    xhr.open("GET", url);
    xhr.send();
};


/* //............funcion pars usar lisview..............
function crearContactos(contactos){
   // Ti.API.info(contactos);   
    //mostrar infromacion json
    //alert(JSON.stringify(contactos)); 
    var items=[];   
    contactos.forEach(function(contacto){ 	
    	//console.log(contacto);
        items.push({
            //nombre:{text:  contacto.results.name.title},
            //imagen:{image: contacto.results.picture.media},
           nombre:{text:  contacto.name.title},
           imagen:{image: contacto.picture.media},
        });
    });  
   // Ti.API.info(tems);
  $.lisctContactos.sections[0].setItems(items);
}*/ //............funcion pars usar lisview.............

obtenerDatos(50);


