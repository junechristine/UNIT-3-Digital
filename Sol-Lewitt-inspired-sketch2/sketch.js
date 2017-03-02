//declaring the variables + initial value
var y = 100;

var circleX = 300;
var rectX = 35;
var tri1 = 500;
var tri2 = 435;
var tri3 = 565;

var x = 0;
var x1 = 600;

var a = 0;
var a1 = 0;

var a2 = 50;
var a3 = 50;

var b = 600;
var b1 = 600;

var b2 = 500;
var b3 = 500;

var b4 = 30;

var c = 0;

var c1 = 25;

var c2 = 30;


function setup() {
  createCanvas(600, 200);
  frameRate(30);

}

function draw() {
  background(0);   // Set the background to black
  y = y - 1; 
  if (y < 0) { 
    y = height; 
  } 
  
  //background
  background(255, 200);
  stroke(0, 150);
  strokeWeight(200);

//vertical lines
  line(0, 0, 0, 200);
  line(a, 0, a1, 200);
  a = a + 1;
  a1 = a1 + 1;
  line(a2, 0, a3, 200);
  a2 = a2 + 3;
  a3 = a3 + 3;
  line(600, 0, 600, 200);
  line(b, 0, b1, 200);
  b = b - 8;
  b1 = b1 - 8;
  line(b2, 0, b3, 200);
  b2 = b2 - 2;
  b3 = b3 - 2;
   line(b4, 0, b4, 200);
   b4 = b4 - 3;
   
   
   
  
  
  //horizontal lines
  line(0, 0, 600, 0);
  line(0, 200, 600, 200);
  
   stroke(255, 100);
   strokeWeight(50);
   line(0, c, 600, c);
   c = c + 1;
   line(0, c1, 600, c1);
   c1 = c1 + 4
   
   stroke(0, 100);
   line(0, c2, 600, c2);
   c2 = c2 + 2;
   

 //disections
  //1st disection
  line(200, 0, 200, 200);
  //2nd disection
  line(400, 0, 400, 200);

fill(200, 190)
stroke(200, 200)
strokeWeight(10)

  //start drawing rectangle
  rect(rectX, 35, 130, 130);
  rectX = rectX + 2;
  

fill(100, 190)
  //circle
  ellipse(circleX, 100, 130, 130);
  circleX = circleX + 1;

fill(0, 190)
  //triangle
  triangle(tri1, 35, tri2, 165, tri3, 165);
  tri1 = tri1 - 3;
  tri2 = tri2 - 3;
  tri3 = tri3 - 3;
  
  
  
  //moving lines
      //strokeWeight(10)
  //vertical
      //line(x, 0, x1, 200);
      //line(0, x, 600, x1);
      //x = x + 6;
      //x1 = x1 + 9;
  
  
  
  
  
  
 
}
