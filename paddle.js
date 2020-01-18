class Paddle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 15;
        this.height = 45;
        this.score = 0;
        this.yspeed = 0;
    }

    show() {
        fill(255);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.y += this.yspeed;
        this.y = constrain(this.y, this.height / 2, height - this.height / 2);
    }

    move(steps) {
        this.yspeed = steps;
    }

}