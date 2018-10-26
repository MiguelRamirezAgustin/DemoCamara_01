
var distX = 0;
var sX = 0;
var frame = 0;

function onStart(e) {
    sX = e.x;
}



function onMove(e) {
    distX = (sX - e.x);

    if (distX < -5) {
   	 frame--;
   	 sX = Math.floor(e.x);
    } else if (distX > 5) {
   	 frame++;
   	 sX = Math.floor(e.x);
    }

    if (frame >= 64) {
   	 frame = 0;
    } else if (frame < 0) {
   	 frame = 63;
    }

    var x = Math.floor((frame * 250) % 2000);
    var y = Math.floor((frame * 250) / 2000) * 250;

    
    $.img.left = -x;
    $.img.top = -y;
}




$.windowImage.addEventListener('touchstar', onStart);
$.windowImage.addEventListener('touchmove', onMove);