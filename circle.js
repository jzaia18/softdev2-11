var clear = function() {
  for(var i = 0; i < circs.length; i++){
    circs[i].remove();
  }
  circs = [];
};

var newCirc = function(e) {
  var rad = 20;
  var dx = Math.floor(Math.random() * 5 + 1);
  var dy = Math.floor(Math.random() * 5 + 1);
  var x = e.offsetX;
  var y = e.offsetY;

  var dot = slate.appendChild(document.createElementNS(NS, 'circle'));
  dot.setAttribute('cx', x);
  dot.setAttribute('cy', y);
  dot.setAttribute('dx', dx);
  dot.setAttribute('dy', dy);
  dot.setAttribute('r', rad);
  dot.setAttribute('href', 'david.png');
  dot.setAttribute('width', rad*2);
  dot.setAttribute('height', rad*2);
  dot.setAttribute('fill', "lightsteelblue");
  circs.push(dot);
};

var drawCircs = function() {
  for(var i = 0; i < circs.length; i++){
    drawCirc(circs[i]);
  }
};

var drawCirc = function(element) {
  var x = Math.floor(element.getAttribute("cx"));
  var y = Math.floor(element.getAttribute("cy"));
  var dx = Math.floor(element.getAttribute("dx"));
  var dy = Math.floor(element.getAttribute("dy"));
  var rad = Math.floor(element.getAttribute("r"));

  if (WIDTH - x < rad || x < 1) {
    dx*=-1;
    element.setAttribute('dx', dx);
  }
  if (HEIGHT - y < rad || y < 1) {
    dy*=-1;
    element.setAttribute('dy', dy);
  }

  x+=dx;
  y+=dy;


  element.setAttribute('cx', x);
  element.setAttribute('cy', y);
};

var NS = "http://www.w3.org/2000/svg";
var TAU = 2*Math.PI; //TAU!!!
var slate = document.getElementById("slate");
var circs = [];
var WIDTH = 500; //cheaty
var HEIGHT = 500; //cheaty

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("slate").addEventListener("click", newCirc);
var t = setInterval(drawCircs, 20);
