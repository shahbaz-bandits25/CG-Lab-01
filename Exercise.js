window.onLoad = myDisplay();

function myDisplay()
 {
    
    var cvs = document.getElementById('mycanvas');

    if (cvs.getContext)
     {
        var ctx = cvs.getContext('2d');

        var img = new Image();
      /*  img.onload = function () {
            ctx.drawImage(img, 100, 100,400, 300);
        }
        img.src = 'images/LCD.png';
 */
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 640, 480);

        ctx.moveTo(0, 0);
        ctx.lineTo(320, 240);
        ctx.stroke();
       
    }

}