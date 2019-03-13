/*
    Angela Tom
    SoftDev pd07
    K09 -- basic SVG work
    2019-03-13w
*/

// Variables
var first = true;

var pic = document.getElementById("vimage");
var clearbutton = document.getElementById("but_clear");

var x, y; // for the line's start pt (coords of last click)

// Draw func
var draw = function(e) {
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("fill", "red");
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", "15");
    circle.setAttribute("stroke", "black");
    pic.appendChild(circle); // red circle
    if (first){
        first = false;
        x = e.offsetX;
        y = e.offsetY;
        return; // first click 
    }
    if (!first){
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
     	line.setAttribute("x1", x);
        line.setAttribute("y1", y);
        //console.log(x)
        line.setAttribute("x2", e.offsetX);
        //console.log(e.offsetX)
      	line.setAttribute("y2", e.offsetY);
      	line.setAttribute("stroke", "black");
        pic.appendChild(line); // line
        x = e.offsetX
        y = e.offsetY
    }
};

var clear = function(e) {
    var c = pic.firstChild
    while (c!= null){
        pic.removeChild(c)
        c = pic.firstChild
    }
	first = true;
};

pic.addEventListener("click", draw);
clearbutton.addEventListener('click', clear);
