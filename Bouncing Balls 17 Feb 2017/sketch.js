
var ball = {
  // this is the position of the ball
  position: {x: 0, y: 150},
  
  // this is the speed of the ball
  speed:  {x: 5, y: 5},
  
  // this is the drawing function of the ball
  draw: function() {
    
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
    
    background(255, 233, 193);
    stroke(255, 132, 201);
    strokeWeight(3);
    fill(255, 53, 146);
    
    // two different options to write this
    // option 1
    this.position.x += this.speed.x;
    // option 2
    this.position.y = this.position.y + this.speed.y;
    
    
    ellipse(this.position.x, this.position.y, 20, 20);
  }
};

function setup() {
  resizeCanvas(500, 500);
}

function draw() {
  ball.draw();
}
