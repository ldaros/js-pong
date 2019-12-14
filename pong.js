class Ball {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.x_direction = 1;
    this.y_direction = 1;
    this.speed = 5;
    this.size = 15;
  }
  show() {
    fill(255);
    noStroke();
    square(this.x, this.y, this.size)
  }
  update_positon() {
    this.x = this.x + (this.x_direction * this.speed);
    this.y = this.y + (this.y_direction * this.speed);
  }
}

class Paddle {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 1;
    this.width = 15;
    this.height = 45;
    this.score = 0;
  }

  show() {
    fill(255);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
  }

  mouse_control() {
    this.y = mouseY;
  }

  folllow_control(targetY) {
    if (targetY > this.y) {
      while (targetY > this.y) {
        this.y += this.speed
      }
    }
    if (targetY < this.y) {
      while (targetY < this.y) {
        this.y -= this.speed
      }
    }
  }

}

function showScore() {
  fill(255);
  noStroke;
  text(player.score, 60, 30)
  text(cpu.score, width - 80, 30)
  textSize(30);

}


function setup() {
  createCanvas(640, 480);
  frameRate(60);
  ball = new Ball;
  player = new Paddle;
  cpu = new Paddle;
  player.x = 30;
  cpu.x = width - 55;
}



function draw() {
  background(0);
  noStroke();

  ball.update_positon();
  ball.show();
  player.mouse_control();
  player.show();
  cpu.folllow_control(ball.y);
  cpu.show();

  if (ball.x > width) {
    ball.x_direction = -1;
    player.score++;
  }
  if (ball.x < 0) {
    ball.x_direction = 1;
    cpu.score++;
  }
  if (ball.y > height) {
    ball.y_direction = -1;
  }
  if (ball.y < 0) {
    ball.y_direction = 1;
  }

  player_hit = collidePointRect(ball.x, ball.y, player.x, player.y, player.width, player.height);
  cpu_hit = collidePointRect(ball.x, ball.y, cpu.x, cpu.y, cpu.width, cpu.height);
  if (player_hit) {
    ball.x_direction = 1;
  }
  if (cpu_hit) {
    ball.x_direction = -1;
  }

  showScore();

}