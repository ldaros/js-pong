class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.x_direction = 0;
    this.y_direction = 0;
    this.speed = 1;
    this.diameter = 15;
  }
  show() {
    fill(255);
    noStroke();
    circle(this.x, this.y, this.diameter);
  }
  update_positon() {
    this.x = this.x + (this.x_direction * this.speed);
    this.y = this.y + (this.y_direction * this.speed);
  }
}


function setup() {
  createCanvas(640, 480);
  frameRate(60);
  ball = new Ball;
  ball.x_direction = 1;
  ball.y_direction = 1;
}

function draw() {
  background(0);
  noStroke();

  ball.update_positon();
  ball.show();

  if (ball.x > width) {
    ball.x_direction = -1;
  }
  if (ball.x < 0) {
    ball.x_direction = 1;
  }
  if (ball.y > height) {
    ball.y_direction = -1;
  }
  if (ball.y < 0) {
    ball.y_direction = 1;
  }
}