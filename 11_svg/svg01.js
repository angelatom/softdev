/*
    Angela Tom
    SoftDev pd07
    K11 -- Ask circles [Change || Die] ... While On The Go
    2019-03-14
*/

// Variables

var pic = document.getElementById("vimage");
var clearbutton = document.getElementById("but_clear");
var movebutton = document.getElementById("move");
var r = document.getElementById("rainbow");

var x, y; // location
var moving = false;

var requestID;

// Draw red circle and add to svg container
var redCircle = function(x, y) {
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("fill", "red");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "15");
    circle.setAttribute("stroke", "black");
    circle.addEventListener("click", circleClick); // add event listener to the circle created
    pic.appendChild(circle); 
}

// clicking on circles (change color or creating new one)
var circleClick = function(e) {
    e.stopPropagation(); 
    if (e.target.getAttribute("fill") == "red"){
        e.target.setAttribute("fill", "blue"); 
    } else {
        pic.removeChild(e.target);
        x = Math.random() * 500;
        y = Math.random() * 500;
        redCircle(x, y);
    }
}


    /*
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    if (rectX + rectWidth == canvas.width || rectX == 0){
	xVel = xVel * -1;
    }
    if (rectY + rectHeight == canvas.height || rectY == 0){
	yVel = yVel * -1;
    }
    rectX = rectX + xVel;
    rectY = rectY + yVel;
*/

// move -- doesn't work
var move = function() {
    moving = true;
    window.cancelAnimationFrame(requestID);
    for (var i = 0; i < pic.children.length; i++) {
        var c = pic.children[i];
        var r = parseInt(c.getAttribute("r"));
        var xvel = 1;
        var yvel = 1;
        var cx = parseInt(c.getAttribute("cx")) + xvel;
        var cy = parseInt(c.getAttribute("cy")) + yvel;
        if ((cx + r) > pic.getAttribute("width") || cx < r) {
            xvel = xvel * -1;
        }
        if ((cy + r) > pic.getAttribute("height") || cy < r) {
            yvel = yvel * -1;
        }
        console.log(pic.getAttribute("width"))
        console.log(cx)
        console.log(cy)
        c.setAttribute("cx", cx);
        c.setAttribute("cy", cy);
    }
    requestID = window.requestAnimationFrame(move);
}

var rainbow = function(e) {
    if (moving){
        if (pic.children.length < 7 || pic.children.length > 7){
            console.log("nah");
            return;
        } else {
        pic.children[0].setAttribute("fill", "red");
        pic.children[1].setAttribute("fill", "orange");
        pic.children[2].setAttribute("fill", "yellow");
        pic.children[3].setAttribute("fill", "green");
        pic.children[4].setAttribute("fill", "blue");
        pic.children[5].setAttribute("fill", "indigo");
        pic.children[6].setAttribute("fill", "violet");
        }
    } else {
        console.log("nah");
        return;
    }
}

// Draw func
var draw = function(e) {
    x = e.offsetX;
    y = e.offsetY;
    redCircle(x,y);
};

// Clear by removing all children
var clear = function(e) {
    var c = pic.firstChild
    while (c!= null){
        pic.removeChild(c)
        c = pic.firstChild
    }
    window.cancelAnimationFrame(requestID);
};

pic.addEventListener("click", draw);
clearbutton.addEventListener('click', clear);
movebutton.addEventListener('click', move)
r.addEventListener('click', rainbow)