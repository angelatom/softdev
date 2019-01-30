// Angela Tom
// SoftDev2
// K00 -- I See a Red Door...
// 2019-01-30


var box = true;

var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

// Draws a green rectangle
var drawRect = function(x,y) {
    //console.log("Hi");
    ctx.fillStyle= "#00ff00";
    ctx.fillRect(x-50,y-50,100,100);
};

// Clear canvas
var clear = function() {
    //ctx.fillStyle = "white";
    ctx.clearRect(0,0,600,600);
};

// Toggle between box or dot
var toggle = function() {
    if (box){
        box = false;
    } else {
        box = true;
    }
    //console.log(box);
};

// Draw a black dot
var drawDot = function(x,y) {
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(x,y,1,1,0,0,Math.PI*2);
    ctx.stroke();
}

// Clicking inside canvas
canvas.addEventListener('click', function(e) {
    x = e.offsetX;
    y = e.offsetY;
    if(box){
        //console.log("boxxxxx")
        drawRect(x,y);
    } else {
        drawDot(x,y);
    }
    //console.log(x);
    //console.log(y);
} );

var clear_button = document.getElementById("clear");
clear_button.addEventListener('click', clear);

var toggle_button = document.getElementById("toggle");
toggle_button.addEventListener('click', toggle);

