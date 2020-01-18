class Puck {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.x_speed = 0;
        this.y_speed = 0;
        this.size = 8;

        this.reset();
    }

    show() {
        fill(255); 
        noStroke();
        ellipse(this.x, this.y, this.size * 2);
    }

    update_positon() {
        this.x = this.x + this.x_speed;
        this.y = this.y + this.y_speed;
    }

    limit() {
        if (this.y < 0 || this.y > height) {
            this.y_speed *= -1;
        }
        if (this.x > width) {
            this.reset();
        }
        if (this.x < 0) {
            this.reset();
        }
    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;

        let angle = random(-PI / 4, PI / 4);
        this.x_speed = 5 * cos(angle);
        this.y_speed = 5 * sin(angle);
        if (random(0, 1) > 0.5) {
            this.x_speed *= -1;
        }
    }

    checkCollisionWithPaddle(left_p, right_p) {
        // right paddle
        if (this.x_speed < 0) {
            if (
                this.y - this.size < left_p.y + left_p.height / 2 &&
                this.y + this.size > left_p.y - left_p.height / 2 &&
                this.x - this.size < left_p.x + left_p.width / 2
            ) {
                if (this.x > left_p.x) {
                    let diff = this.y - (left_p.y - left_p.height / 2);
                    let rad = radians(45);
                    let angle = map(diff, 0, left_p.height, -rad, rad);
                    this.x_speed = 5 * cos(angle);
                    this.y_speed = 5 * sin(angle);
                    this.x = left_p.x + left_p.width / 2 + this.size;
                }
            }
        }
        // left paddle
        if (this.x_speed > 0) {
            if (
                this.y - this.size < right_p.y + right_p.height / 2 &&
                this.y + this.size > right_p.y - right_p.height / 2 &&
                this.x + this.size > right_p.x - right_p.width / 2
            ) {
                if (this.x < right_p.x) {
                    let diff = this.y - (right_p.y - right_p.height / 2);
                    let angle = map(diff, 0, right_p.height, radians(225), radians(135));
                    this.x_speed = 5 * cos(angle);
                    this.y_speed = 5 * sin(angle);
                    this.x = right_p.x - right_p.width / 2 - this.size;
                }
            }
        }
    }
}