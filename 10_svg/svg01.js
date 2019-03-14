/*
    Angela Tom
    SoftDev pd07
    K10 -- Ask Circles [Change || Die]
    2019-03-14
*/

// Variables

var pic = document.getElementById("vimage");
var clearbutton = document.getElementById("but_clear");

var x, y; // location

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
    e.stopPropagation(); //stop parent event listener
    if (e.target.getAttribute("fill") == "red"){
        e.target.setAttribute("fill", "blue"); 
    } else {
        pic.removeChild(e.target);
        x = Math.random() * 500;
        y = Math.random() * 500;
        redCircle(x, y);
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
};

pic.addEventListener("click", draw);
clearbutton.addEventListener('click', clear);
