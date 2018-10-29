exports.menuwin= function(){

var wins=Ti.UI.createWindow({
      backgroundcolor:"white",
      fullscreen:true,
      width:"100%",
      height:"100%"
});

      
var popusview=Ti.UI.createView({
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
popusview.add(Ti.UI.createLabel({
      width:'100%',
      heigth:'auto',
      top:0,
      left:0,
      backgroundColor:'orange',
      text:'USUARIOS',
      color:"white",
      textAlign:Titanium.UI.TEXT_ALIGNMENT_CENTER,
      font:{
          fontSize:30,
      }
  }));
wins.add(popusview);


var view1=Ti.UI.createView({
      width:"100%",
      height:'10%',
      top:'15%',
      layout:'vertical',
});
popusview.add(view1);

var label1=Ti.UI.createLabel({
      text:'usuarios',
      color:'white',
      top:'30%',
      left:'5%',
      id:'labelweb',
      font:{
          fontSize:25
      }
});
view1.add(label1);

label1.addEventListener('click', function(e){
    var ventanaPost= Alloy.createController('ventanaPost').getView();
    ventanaPost.open();
});


wins.addEventListener('click', function(e){
     wins.close();
});
return wins,
}