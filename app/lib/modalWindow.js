
exports.modalWin = function(){
  
var popupWin=Ti.UI.createWindow({
   backgroundColor:"white",
   fullscreen:true,
   id:"popupWin",
   width:"100%",
   height:"100%"
});
var popupView= Ti.UI.createView({
    width:'66%',
    heigth:'50%',
    backgroundColor:'black',
    opacity:0.5,
    borderRadius:3,
    borderWidth:1,
    borderColor:"orange",
    layout:'vertical',
    left:0,
    top:0
});

popupView.add(Ti.UI.createLabel({
    width:'100%',
    heigth:'auto',
    top:0,
    left:0,
    backgroundColor:'orange',
    text:'MENÙ',
    color:"white",
    textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER,
    font:{
        fontSize:30,
        fontWeight:'bold'
    }
}));
popupWin.add(popupView);


//vista 1
var view1=Ti.UI.createView({
   width:"100%",
   height:'10%',
   top:'10%',
   layout:'horizontal',
});
popupView.add(view1);

var img1= Ti.UI.createImageView({
    image:'/images/busqueda.png',
    height:'45%',
    width:'15%',
    left:15,
    top:20
});
view1.add(img1);

var label1=Ti.UI.createLabel({
    text:'Google',
    color:'white',
    top:'30%',
    left:'10%',
    id:'labelweb',
    font:{
        fontSize:18
    }
 });
 view1.add(label1);

 //llamada de la vista google evento en el label 
 label1.addEventListener('click', function(e){
    var weblabel=Alloy.createController('webgoogle').getView();
    weblabel.open();
 }); 


 //vista 2
var view2= Ti.UI.createView({
   height:'100%',
   height:'10%',
   layout:'horizontal',
   id:"btnweb"
});
popupView.add(view2);

var img2=Ti.UI.createImageView({
   image:'/images/skype.png',
   height:'45%',
   width:'15%',
   left:15,
   top:20
});
view2.add(img2);

var label2=Ti.UI.createLabel({
    text:'Skype', 
    color:'white',
    top:'30%',
    left:'10%',
    font:{
        fontSize:18
    }
});
view2.add(label2);

//llamada de la vista skype evento el label
label2.addEventListener('click', function(e){
   var webskype=Alloy.createController('webskype').getView();
   webskype.open();
});

//vista 3
var view3=Ti.UI.createView({
   height:'100%',
   height:'10%',
   layout:'horizontal',
});
popupView.add(view3);

var img3=Ti.UI.createImageView({
   image:'/images/youtube.png',
   height:'45%',
   width:'15%',
   left:15,
   top:20
});
view3.add(img3);

//llamada de la vista youtube evento en la imagen 
img3.addEventListener('click', function(e){
    var webyoutube= Alloy.createController('webyoutube').getView();
    webyoutube.open();
   });


var label13=Ti.UI.createLabel({
   text:'YouTube', 
   color:'white',
   top:'30%',
   left:'10%',
   font:{
       fontSize:18
   }
});
view3.add(label13);

//vista 4
var view4=Ti.UI.createView({
    height:'100%',
    height:'10%',
    layout:'horizontal',
 });
 popupView.add(view4);

 
 var ima4=Ti.UI.createImageView({
    image:'/images/git.png',
    height:'45%',
    width:'15%',
    left:15,
    top:20
 });
 view4.add(ima4);
 
 //llamada de la vista github evento en la imagen
 ima4.addEventListener('click', function(e){
    var webgithub=Alloy.createController('webgithub').getView();
    webgithub.open();
 });
 
 var label14=Ti.UI.createLabel({
    text:'GitHub', 
    color:'white',
    top:'30%',
    left:'10%',
    font:{
        fontSize:18
    }
 });
 view4.add(label14);


//vista 5
var view5=Ti.UI.createView({
   width:"100%",
   height:"10%",
   layout:"horizontal"
});
popupView.add(view5);

//llamada de la vista evento en la vista
view5.addEventListener('click', function(e){
   var webmapa= Alloy.createController('webmapa').getView();
   webmapa.open();
});

var img5= Ti.UI.createImageView({
   width:"15%",
   height:"45%",
   image:"/images/map.png",
   top:20,
   left:15
});
view5.add(img5);

label5=Ti.UI.createLabel({
   text:'Mapa',
   color:"white",
   left:"10%",
   top:"30%",
   font:{
       fontSize:18
   }
});
view5.add(label5);

//visata 6
var view6=Ti.UI.createView({
  width:"100%",
  height:"10%",
  layout:"horizontal"
});
popupView.add(view6);

//llamada de la vista drive evento en la vista
view6.addEventListener('click', function(e){
   var webdrive= Alloy.createController('webdrive').getView();
   webdrive.open();
});

var img6= Ti.UI.createImageView({
    width:"15%",
    height:"45%",
    image:"/images/drive.png",
    top:20,
    left:15
});
view6.add(img6);

var label6=Ti.UI.createLabel({
   text:"Drive",
   color:"white",
   left:"10%",
   top:"30%",
   font:{
       fontSize:18
   }
});
view6.add(label6);

var view7=Ti.UI.createView({
      width:"100%",
      height:"10%",
      layout:"horizontal"
});
popupView.add(view7);

var label7=Ti.UI.createLabel({
    text:"Imagen",
    color:"white",
    left:"10%",
    top:"30%",
    font:{
        fontSize:20
    }
 });
 view7.add(label7);

 popupView.addEventListener('click', function(e){
   var imagen=Alloy.createController('imagen').getView();
   imagen.open();
 });

popupWin.addEventListener('click', function(e){
   if(e.source.id !=null)
   popupWin.close();
});
return popupWin;
};

