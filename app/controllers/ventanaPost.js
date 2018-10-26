

function metodoPost(){

var xhr= Ti.UI.Network.createHTTPClient();
    xhr.open('POST', 'https://api.cloud.appcelerator.com/v1/users/login.json?key=osLPdnTb5dq1f7qZnvalENoEk1b1TRkI&pretty_json=true');

    xhr.onload= function(e){
      var content = JSON.parse(this.responseText);
      Ti.API.info(content);
      if(content.error == undefined){
            alert('prueba');
      }else{
            alert(content.error);
      }
};
    xhr.onerror= function(e){
     Ti.UI.createAlertDialogo({title: 'Error', message:e.error}).show();
     Ti.UI.info(e.error);  
  };
  setTimeout: 6000;

  xhr.setRequestHeand("Content-Type", 'application/x-www-form-urlencoded');
  xhr.send({ 
      textFielUsuario: '',
      textFieldContraseña:''
});
}

metodoPost();