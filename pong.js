function showScore() {
  fill(255);
  noStroke;
  textAlign(CENTER);
  text(left.score, 60, 30)
  text(right.score, width - 60, 30)
  textSize(30);
}

function setup() {
  createCanvas(640, 480);
  frameRate(60);
  puck = new Puck;

  left = new Paddle;
  left.x = 30;

  right = new Paddle;
  right.x = width - 30;
}

function keyReleased() {
  left.move(0);
  right.move(0);
}

function keyPressed() {
  if (key == 'a') {
    left.move(-10);
  }
  if (key == 'z') {
    left.move(10);
  }

  if (key == 'k') {
    right.move(-10);
  }
  if (key == 'm') {
    right.move(10);
  }
  return false;
}

function draw() {
  background(0);
  noStroke();

  puck.update_positon();

  if (puck.x > width) {
    left.score++;
  }
  if (puck.x < 0) {
    right.score++;
  }

  puck.limit();
  puck.show();
  puck.checkCollisionWithPaddle(left, right);


  left.update();
  left.show();

  right.update();
  right.show();


  showScore();

}