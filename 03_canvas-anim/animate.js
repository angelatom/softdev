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
	cancelAnimationFrame(requestID);
};

var clear = function() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

var drawDot = function() {
	clear();
	requestID = requestAnimationFrame(drawDot);
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

var dotButton = document.getElementById("circle");
dotButton.addEventListener('click', drawDot);

var clear_button = document.getElementById("stop");
clear_button.addEventListener('click', stopIt);
