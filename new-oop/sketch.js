let balls = [];
let song, beep; // <----
let interacted = false;  // <------

function preload() {
  song = loadSound("assets/sounds/song.mp3")
  beep = loadSound("assets/sounds/beat.mp3")
}

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  balls[0] = new Ball(width / 2, height / 2)
}

function mousePressed() {
  if (!interacted) {
    song.play() // <------
    interacted = true;
  } else {
    balls.push(new Ball(mouseX, mouseY))
  }
}

function draw() {
  background(220);

  textSize(24);
  if (interacted) {
    for (let i = 0; i < balls.length; i++) {
      balls[i].update();
      balls[i].display();
    }
    text("number of balls: " + balls.length, width / 2, 30)
  } else {
    textAlign(CENTER);
    text("click me to interact!", width / 2, height / 2);
  }

}

class Ball {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-2, 2);
    this.size = random(20, 50);

    this.myRate = map(this.size, 20, 50, 1, 0.2)
  }
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    this.checkEdges();
  }
  checkEdges() {
    if (this.x > width || this.x < 0) {
      // horizontal collide
      this.xSpeed = -this.xSpeed;
      beep.rate(this.myRate)
      beep.play()
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed = -this.ySpeed
      beep.rate(this.myRate)
      beep.play()
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(0);
    noStroke();
    circle(0, 0, this.size)
    pop();
  }
}
