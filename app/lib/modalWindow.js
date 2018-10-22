
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
    borderRadius:2,
  //borderWidth:2,
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
    text:'MENU',
    color:"white",
    textAling:Titanium.UI.TEXT_ALIGNMENT_CENTER,
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

//vista 3
var view3=Ti.UI.createView({
   height:'100%',
   height:'10%',
   layout:'horizontal',
});
popupView.add(view3);

var ima3=Ti.UI.createImageView({
   image:'/images/youtube.png',
   height:'45%',
   width:'15%',
   left:15,
   top:20
});
view3.add(ima3);

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

popupWin.addEventListener('click', function(e){
   if(e.source.id !=null)
   popupWin.close();
});
return popupWin;
};



//funcion id
$.labelweb.addEventListener('click', function(e){
    var weblabel= Alloy.createController('webgoogle').getView();
    weblabel.open();
});