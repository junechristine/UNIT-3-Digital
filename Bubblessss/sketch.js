function Ball(x, y) {
 this.position = {x: x, y: y};
 this.speed = {x: random(-4, 3), y: random(-4, 3)},
 
this.draw = function() {
  // same thing can be written in multiple ways but means same thing
  // option 1
  this.position.x = this.position.x + this.speed.x + random(-5, 1);
  // option 2
  this.position.y = this.position.y + this.speed.y + random(-5, 1);
   
  ellipse(this.position.x, this.position.y, 80, 80);
  
  if(this.position.x > width) {
      this.speed.x *= -1;
    }
    
    if(this.position.y > height) {
      this.speed.y *= -1;
    }
    
    if(this.position.y < 0) {
      this.speed.y *= -1;
    }
    
    if (this.position.x < 0) {
      this.speed.x *= -1;
    }
 }
}


var balls = [];

function mouseDragged() {
  var ball = new Ball(mouseX, mouseY);
  balls.push(ball);
}



function draw() {
  background(242, 247, 255);
  fill(250, 250, 255, 100);
  strokeWeight(3);
  stroke(255, 173, 195, 50);
  for(var i = 0; i < balls.length; i++) {
    balls[i].draw();
  }
}

function setup() {
  resizeCanvas(500, 500);
}
