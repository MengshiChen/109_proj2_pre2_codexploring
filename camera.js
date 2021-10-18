let capture;
let canvas;

function setup() {
  canvas=createCanvas(300, 300);
  canvas.parent('myCamera');
  capture = createCapture(VIDEO);
  capture.size(300, 300);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 700, 400);
  // filter('INVERT');
}
