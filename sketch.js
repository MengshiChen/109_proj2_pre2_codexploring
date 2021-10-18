let img1,img2;
let canvas;
function preload() {
  img1 = loadImage('images/img_1.JPG');
  img2 = loadImage('images/img_2.JPG');
}


var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h; // Location and size
var offsetX, offsetY; // Mouseclick offset


function setup() {
  canvas=createCanvas(700,400);
 canvas.parent('myContainer');

  // Starting location
  x= random(width);//initialize the x location to a random value
  y=random(height);//initialize the y location to a random value
  x2=random(width);
  y2=random(height);

  // Dimensions
  w = 100;
  h = 100;


}

function draw() {
  background(255);


  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } else {
    rollover = false;
  }


  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }




  stroke(0);

  image(img1, x, y, w, h);
  image(img2, x2, y2, w, h);
}



function mousePressed() {

  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;

    offsetX = x - mouseX;
    offsetY = y - mouseY;
  }




}


function mouseReleased() {
  // Quit dragging
  dragging = false;
}



// appuyer sur la touche "a" permet de télécharger la composition

function keyTyped() {
  if (key === 'a') {
    save('image.png');
  }
}


// Camera Access!!!!!!!---------------------------------------------------------------------------------------------
