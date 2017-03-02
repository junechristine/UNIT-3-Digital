var spot = {
  x: 100,
  y: 50,
};

var spot2 = {
  x: 300,
  y: 150,
}

var spot3 = {
  x: 500,
  y: 250,
}

var col = {
  r: 255,
  g: 0,
  b: 0,
};



function setup() {
  createCanvas(600, 400);
  background(255);
}

function draw() {
  //small spots
  col.r = random(100,255);
  col.g = 0;
  col.b = random(100, 190);
  spot.x = random(0, width);
  spot.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 24, 24);
  
 //medium spots
  col.r = random(200,255);
  col.g = random(0, 150);
  col.b = random(100, 190);
  spot2.x = random(0, width);
  spot2.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot2.x, spot2.y, 50, 50);
  
  //large spots
  col.r = random(0, 100);
  col.g = random(100, 200);
  col.b = random(50, 190);
  spot3.x = random(0, width);
  spot3.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(spot3.x, spot3.y, 50, 50);
  
}