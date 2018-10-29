var Cloud=require('ti.cloud');
var image = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'imagen.jpg');

var imageViewImage= Ti.UI.createImageView({
	image:image.read(),
	height:'90%',
	width:'70%',
	backgroundColor:'#F0FFFF',
	borderRadius:10,
	borderWidtsh:2,
	borderColor:"black",
	top:'4%'
});

$.viewFoto.add(imageViewImage);

function AbrirCamara(e) {
	if(!Ti.Media.hasCameraPermissions()){
		Ti.Media.requestCameraPermissions(function(e){
			if(e.succes){
				alert('imagen abrir');
				camaraFoto();
			}else{
				Ti.API.error('No se puede tener permisos a la camara');
			}
		});
	}else{
		camaraFoto();
	}
	
}



function camaraFoto(event){
	Ti.Media.showCamera({
		//permisos para la camara
		saveToPhotoGallery:true,
		allowEditing:false,
		autohide:false,
		
		success:function(event){
			 imageViewImage.image=event.media;
			 //direccion de la foto para guardar
		 	var imageSave =Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'image.jpg');
			 imageSave.write(imageViewImage.image);  //Escribe la foto
			      //crear foto
			 Cloud.Photos.create({
				 //variable donde de almacena la imagen
                 photo:imageSave
			 }, function (e){
				 if(e.success){
					 var photo=e.photos[0];
					 alert(
						 'succes:\n ' +
						 'id: ' + photo.id +
						 'filename:  ' + photo.size,
						 'update:at:  ' + photo.updated_at	
					);
				 }else{
					 alert('error:\n ' +
					((e.error && e.message) || JSON.stringify(e)));
				 }
			 });
		}
	});
}

//funcion para verificar coneccion a internet 
function BuscarImagen(){
   if(Ti.Network.networkType == Ti.Network.NETWORK_NONE){
	   alert('No tienes coneccion a internet');
   }else{
	   alert('tienes coneccion a internet');
   }
};

BuscarImagen();

function AbrirGaleria(){
	Ti.Media.openPhotoGallery({
		mediaTypes:[Titanium.Media.MEDIA_TYPE_PHOTO],
		success: function (e){
			//image view creado y mostrar imagen en view que se selecciono de la galeria 
			//dos maneras de mandar a pintar la imagen s
			imageViewImage.setImage(e.media);
			//imageViewImage.image=e.media;
			alert ('media.width: ' + e.media.whidth
				+ '\nmedia.heigth: ' + e.media.height
				+ '\nmedia.mimeType: ' + e.media.mimeType
				+ '\nmedia.nativePath:' + e.media.nativePath );	
		},
		error: function(e){
			alert('El error es\n '+e);
		}
	});
}


function AbrirGaleriaPhotos(){
  
    Titanium.Media.openPhotoGallery({
	mediaTypes:[Titanium.MEDIA_TYPE_PHOTO],

	    success:function(event){
		   var cropRect=event.cropRect;
		   // var image= event.media;

		    Ti.API.debug('el tipo es:  '+ event.mediaTypes);
		    console.log('__________________'+event);

		    if(event.mediaTypes==Ti.MEDIA_TYPE_PHOTO){
			    var image=event.media;
			    console.log("*****************"+event.mediaTypes);
			    imageViewImage.setImage(event.media);
			    var imgStrin=Ti.Utils.base64encode(image).toString();
			    alert(JSON.stringify(imgStrin));

			    console.log('Base 64___________\n'+imgStrin);
		    }
		    else{

		    }
		    Titanium.API.info('Descripcion\n' + cropRect.x + '\n'+cropRect.y + '\n'+cropRect.height + '\n'+cropRect.whidth);
	    },
    });
};



/*funcion para dehabilitar el boton back de android 
$.index.addEventListener('android:back', function(){
  alert('click en boton back y no funciona')
});*/


//evento para mandar a llamar otra ventana 
$.siguiente.addEventListener('click', function(e){
  var vista= Alloy.createController('ventana').getView();
  vista.open();
});


function open2(){
	var indicador =Alloy.createController('indicador').getView();
	indicador.open();
}

$.btnConsultaFotos.addEventListener('click', function(e){
   var consutaFoto = Alloy.createController('consultaFoto').getView();
   consutaFoto.open();
});

var tooas= Ti.UI.createNotification({
	message:'Notifacion',
	duration:Ti.UI.NOTIFICATION_DURATION_LONG
   });

$.btnMenusUarios.addEventListener('click', function(e){
  var modal=require('menupopus.js').menuwin;
  var wins= new modal();
  wins.open();
})

//orientacion de dispositivo

Alloy.Globals.isLandscase=false;
Alloy.Globals.isPortrait=true;

$.index.add(tooas);
$.index.open();

// do some work that takes 6 seconds
// ie. replace the following setTimeout block with your code
