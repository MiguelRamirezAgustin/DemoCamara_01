

function showIndicator(e){
    $.activityIndicator.show();
    setTimeout(function(){
     e.source.close();
     $.activityIndicator.hide();
    },5000);
};
