var bgImage = new Image();
var fgImage = new Image();
var timer;
var ball = {
    xx: 64,
    yy: 48,
    w: fgImage.width,
    h: fgImage.height
}
var position;

window.onLoad = myInit();

function myInit()
{
    bgImage.src = 'images/basket.jpg';
    fgImage.src = 'images/ball.jpg';

    myDisplay();
}

function myDisplay()
{
    var cvs = document.getElementById('mycanvas');
    var ctx = cvs.getContext('2d');
    /*bgImage.onload= function()
    {
        ctx.drawImage(bgImage, 0, 0);
    }*/

    cvs.onclick = function (e) {
        var x = e.clientX ;
        var y = e.clientY-100;

        ctx.drawImage(fgImage, x, y, 64, 48);
    }
    document.body.addEventListener('keydown' ,function(e) {
    e = event || window.event;
        alert(String.fromCharCode(e.keyCode)+ "-->" + e.keyCode);
        console.log("You press some key");


        var keycode = e.charCode || e.keyCode;
        if(keycode === 13) {
        
            console.log("You've Invoke Timmer Function");
            position = 130;
            timer = setInterval(moveBall, 1);
           
        }

        
    }
    
    )

   

    
    function moveBall() {
        console.log("You're inside moveball function");


        ctx.drawImage(bgImage,110,110);

        ctx.drawImage(fgImage, position, position, 60, 60);

        if (position == 330) {
            console.log(" move ball fn");
            clearInterval(timer);
        }
        position++;
    }


    }

  