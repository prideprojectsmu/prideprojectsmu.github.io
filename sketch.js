var img;
var smallPoint, largePoint;

var colors = [];
var index = 0;

var angle = 0;

var alph = 10;

function setup() {
  var canvas = createCanvas(windowWidth/3, windowHeight);
  canvas.parent('canvas'); 
  colors.push(color(207, 79, 79, 10));
  colors.push(color(237, 140, 55, 10));
  colors.push(color(245, 169, 54, 10));
  colors.push(color(81, 168, 133, 10));
  colors.push(color(38, 122, 158, 10));
  colors.push(color(152, 107, 155, 10)); 
  smallPoint = 15;
  largePoint = 45;
  imageMode(CENTER);
  noStroke();
  clear();
  angleMode(RADIANS);
}

function draw() {

  for (var i = 0; i < 15; i++) {
    var v = p5.Vector.random2D();

    var wave = map(sin(angle), -1, 1, 0, 4);

    v.mult(random(1, 10*wave));
    var pointillize = random(smallPoint, largePoint);
    var x = mouseX + v.x;
    var y = mouseY + v.y;
    fill(colors[index]);
    ellipse(x, y, pointillize, pointillize);
  }

  if (random(1) < 0.03) {
    index = (index + 1) % colors.length;
  }

  angle += 0.02;
}