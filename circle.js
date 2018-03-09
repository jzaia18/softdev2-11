var clear = function() {
  slate.innerHTML = '';
};

var newCirc = function(e) {
  var rad = 20;
  var dx = Math.floor(Math.random() * 5 + 1);
  var dy = Math.floor(Math.random() * 5 + 1);
  var x = e.offsetX;
  var y = e.offsetY;

  var dvd = slate.appendChild(document.createElementNS(NS, 'circle'));
  dvd.setAttribute('x', x);
  dvd.setAttribute('y', y);
  dvd.setAttribute('dx', 3);
  dvd.setAttribute('dy', 3);
  dvd.setAttribute('r', rad);
  dvd.setAttribute('href', 'david.png');
  dvd.setAttribute('width', rad*2);
  dvd.setAttribute('height', rad*2);
  dvd.setAttribute('fill', "lightsteelblue");
  circs.push(dvd);
};

//TODO
var drawCircs = function() {
  for(var i; i < circs.length; i++){
    drawCirc(circs[i]);
  }
};

var drawCirc = function(element) {
  var x = element.getAttribute("x");
  var y = element.getAttribute("y");
  var dx = element.getAttribute("dx");
  var dy = element.getAttribute("dy");
  var rad = element.getAttribute("r");

  if (Math.abs(y-HEIGHT) < rad*2 + 1 || y < 1)
    dy*=-1;
  if (Math.abs(x-WIDTH) < rad*2 + 1 || x < 1)
    dx*=-1;

  element.setAttribute('x', x);
  element.setAttribute('y', y);

  console.log('hui');

  x+=dx;
  y+=dy;
};

var NS = "http://www.w3.org/2000/svg";
var TAU = 2*Math.PI; //TAU!!!
var slate = document.getElementById("slate");
var circs = [];
var WIDTH = 500; //cheaty
var HEIGHT = 500; //cheaty

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("slate").addEventListener("click", newCirc);
setInterval(1000, drawCircs);
