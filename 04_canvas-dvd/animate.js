// thesky -- Angela Tom and Mai Rachlevsky
// SoftDev2 pd7
// K03 -- They lock us in the tower whenever we get caught
// 2019-02-06

var canvas = document.getElementById("playground");
var ctx = canvas.getContext("2d");

var requestID;
var radius = 0;
var growing = true;


// Clear canvas
var stopIt = function() {
    window.cancelAnimationFrame(requestID);
};

var clear = function() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

var drawDot = function() {
    window.cancelAnimationFrame(requestID);
    clear();
    requestID = window.requestAnimationFrame(drawDot);
    console.log(requestID);
    ctx.fillStyle = "black";
    if (growing){
	radius++;
    } else {
	radius--;
    }
    ctx.beginPath(); //
    ctx.arc(canvas.width/2,canvas.height/2,radius,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();
    if(radius == canvas.width/2){
	growing = false;
    } else if (radius == 0){
	growing = true;
    }
    //clear();
}	

var dvdLogoSetup = function() {
    
    dvdRun()
}

var dvdRun = function() {
    window.cancelAnimationFrame(requestID);
    clear();
    var rectWidth = 100;
    var rectHeight = 50;

    var rectX = Math.floor(Math.random() * (canvas.width - rectWidth));
    var rectY = Math.floor(Math.random() * (canvas.height - rectHeight));

    var xVel = 1;
    var yVel = 1;
    ctx.fillRect( rectX, rectY, rectWidth, rectHeight);

    if (rectX == canvas.width || 0){
	    xVel = xVel * -1;
    }

    if (rectY == canvas.height || 0){
	    xVel = xVel * -1;
    }

    rectX = rectX + xVel;
    rectY = rectY + yVel;

	requestID = window.requestAnimationFrame(dvdRun);
	    //var logo = new Image();
	    //logo.src = "logo_dvd.jpg";
	    // ctx.drawImage(logo...)
	    
}

var dotButton = document.getElementById("circle");
dotButton.addEventListener('click', drawDot);

var clear_button = document.getElementById("stop");
clear_button.addEventListener('click', stopIt);

var movie_button = document.getElementById("dvd");
movie_button.addEventListener('click', dvdLogoSetup);
