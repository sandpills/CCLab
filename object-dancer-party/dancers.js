class RyanDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        //..
        //..
        //..
        this.degs = 0;
        this.blink = 0;
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        this.deg = sin(frameCount * 0.01) * 10;

        this.x += sin(frameCount * 0.01);
        this.y += cos(frameCount * 0.01);

        this.blink = map(sin(frameCount * 0.01), -1, 1, 0, 20);
    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        translate(this.x, this.y);
        angleMode(DEGREES);

        // ******** //
        // ⬇️ draw your dancer from here ⬇️
        fill(0);
        stroke(255);
        // arms
        ellipse(40, -20, 40, 20);
        ellipse(-40, -20, 40, 20);
        // legs
        ellipse(40, 40, 40, 20);
        ellipse(-40, 40, 40, 20);
        pop();

        push();
        translate(this.x, this.y);
        // torso
        fill(255);
        rotate(-this.deg);
        ellipse(0, 0, 80, 100);
        pop();

        // head
        push();
        stroke(255);
        translate(this.x, this.y);
        rotate(this.deg);
        fill(0);
        circle(30, -80, 30);
        circle(-30, -80, 30);
        fill(255);
        stroke(0);
        circle(0, -50, 80);
        fill(0);
        // eyes
        ellipse(15, -50, 20, this.blink);
        ellipse(-15, -50, 20, this.blink);
        // nose
        ellipse(0, -40, 10, 5);
        //mouth
        arc(0, -35, 35, 40, 0, 180);

        pop();
    }
}

class HuySkibidiDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        //..
        //..
        //..
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        // let wave = sin(frameCount * 0.05) * 10
        // // this.y = height / 4 + wave
        // this.x = map(noise(frameCount * 0.015), 0, 1, -20, 20)

        // // push()
        // translate(this.x, this.y)
        // let angle = radians(30)

    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        let bodyMove = map(sin(frameCount * 0.1), -1, 1, -20, 20)
        let bodyMove2 = map(noise(frameCount * 0.1), 0, 1, -10, 10)
        translate(this.x + bodyMove2, this.y + bodyMove);
        fill(255, 120, 10)
        ellipse(0, 0, 100, 200);

        for (let i = -75; i < 100; i += 25) {
            strokeWeight(4)
            line(-50, i, 50, i);
        }

        //Hat
        strokeWeight(1)
        fill(0, 255, 0)
        let hatMove = map(sin(frameCount * 0.1), -1, 1, -5, 5)
        triangle(-10, -100 + hatMove, -50, -70 + hatMove, -52, -95 + hatMove)
        triangle(10, -100 + hatMove, 50, -70 + hatMove, 52, -95 + hatMove)
        triangle(-20, -100 + hatMove, 0, -50 + hatMove, +20, -100 + hatMove)
        noStroke()
        rect(-20, -150, 40, 50 + hatMove)

        //eyes
        fill(255)
        circle(-20, -20, 20)
        circle(20, -20, 20)
        //black eyes
        fill(0)
        let toggling = map(sin(frameCount * 0.1), -1, 1, -1, 5)
        let toggling2 = map(cos(frameCount * 0.1), -1, 1, -3, 4)
        circle(-20 + toggling, -17 + toggling2, 15)
        circle(20 + toggling2, -23 + toggling, 15)

        //mouth
        strokeWeight(2)
        stroke(0)
        fill(255, 0, 0)
        let shaking = map(sin(frameCount * 0.1), -1, 1, -1, 5)
        arc(0, 1 + shaking, 35, 40, 0, PI)

        //upper leg
        stroke(255)
        strokeWeight(5)
        let danceLeg = map(sin(frameCount * 0.1), -1, 1, -50, 50)
        line(-50, -25, -125 + danceLeg, -75)
        line(50, -25, 125 + danceLeg, -75)

        //lower leg
        let danceLeg2 = map(sin(frameCount * 0.1), -1, 1, -15, 15)
        line(-35, 75, -125, 150 + danceLeg2)
        line(35, 75, 125, 150 + danceLeg2)

        pop();
    }
}

class AnnaDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }
    update() {
        let sinValue = sin(frameCount * 0.05) * 50
        this.y = height / 2 + sinValue
        this.x = map(noise(frameCount * 0.015), 0, 1, 0, width)
        this.angle = sin(frameCount * 0.05) * radians(15)


    }
    display() {

        push();
        translate(this.x, this.y);
        rotate(this.angle)
        //red circle 
        fill(139, 0, 0)
        circle(0, 0, 150, 155)
        //white circles
        noStroke()
        fill(255)
        ellipse(0, -35, 55, 60)
        ellipse(35, 0, 55, 60)
        ellipse(0, 35, 55, 60)
        ellipse(-35, 0, 55, 60)
        //yellow part
        noStroke()
        fill(255, 204, 0)
        ellipse(0, 0, 55, 55)
        //eyes
        fill(0)
        ellipse(-9, -8, 6, 8)
        ellipse(9, -8, 6, 8)
        fill(255)
        ellipse(-8, -10, 2, 2)
        ellipse(8, -10, 2, 3)
        //mouth
        noStroke()
        fill("red")
        arc(0, 1, 35, 40, 0, PI)

        pop()

    }
}

class AngelinaDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        //..
        //..
        //..
    }
    update() {
        // this.drawWings(x, y)
    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        translate(this.x, this.y);

        this.drawWings(0, 0)
        push()
        fill(255, 253, 116)
        ellipse(0, 30, 60, 100)
        ellipse(15, -70, 10, 50)
        ellipse(-15, -70, 10, 50)
        circle(0, -30, 60)
        fill(0)
        circle(-10, -30, 9)
        circle(10, -30, 9)
        triangle(0, -25, -5, -15, 5, -15)
        pop()

        pop();
    }
    drawWings(x1, y1) {
        push()
        noStroke()
        fill(255, 192, 203)
        push()
        rotate(sin(frameCount * 0.05) * 0.3)
        ellipse(50, 10, 90, 50)
        pop()
        push()
        rotate(-sin(frameCount * 0.05) * 0.3)
        ellipse(-50, 10, 90, 50)
        pop()
        pop()
    }
}

class ChristinaDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        this.angle = 0
        this.lEAr = 0
        this.rEar = 0
        this.spd = 5
        this.arm = 0
        this.jump = 0
        //..
        //..
        //..
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        this.angle = sin(frameCount * 0.03) * 10
        this.lEar = sin(frameCount * this.spd * 0.01) * 10
        this.rEar = -sin(frameCount * this.spd * 0.01) * 9
        this.jump = cos(frameCount * 0.06) * 100
        this.arm = sin(frameCount * -0.06) * 6
    }
    display() {
        push();
        // console.log(this.active, frameCount)
        translate(this.x, this.y);
        // ******** //
        // ⬇️ draw your dancer from here ⬇️
        angleMode(DEGREES)
        push()
        translate(0, 50)
        translate(0, this.jump)
        rotate(this.angle)
        push()
        translate(2, -150)
        rotate(2)
        fill(255)
        push()
        rotate(this.arm)
        beginShape()
        curveVertex(-13, 34)
        curveVertex(-13, 34)
        curveVertex(-28, 49)
        curveVertex(0, 53)
        curveVertex(0, 53)
        endShape()
        pop()
        beginShape()
        curveVertex(-16, 53)
        curveVertex(-16, 53)
        curveVertex(-20, 72)
        curveVertex(-17, 74)
        curveVertex(0, 70)
        curveVertex(17, 74)
        curveVertex(20, 72)
        curveVertex(16, 53)
        curveVertex(16, 53)
        endShape()
        push()
        rotate(-this.arm)
        beginShape()
        curveVertex(0, 53)
        curveVertex(0, 53)
        curveVertex(28, 49)
        curveVertex(17, 34)
        curveVertex(17, 34)
        endShape()
        pop()
        push()
        noStroke()
        fill(255)
        beginShape()
        curveVertex(-13, 34)
        curveVertex(-15, 53)
        curveVertex(15, 53)
        curveVertex(13, 34)
        endShape(CLOSE)
        pop()
        pop()
        push()
        translate(5, -165)
        rotate(2)
        push()
        stroke(0)
        strokeWeight(1)
        ellipse(0, 0, 130, 110)
        pop()
        push()
        translate(-35, 15)
        push()
        rotate(55)
        fill(0)
        ellipse(0, 0, 40, 35)
        pop()
        fill(255)
        circle(-7, -7, 18)
        circle(6, 11, 10)
        noStroke()
        fill(255, 217, 247)
        ellipse(-20, 10, 13, 5)
        pop()
        push()
        translate(35, 15)
        push()
        rotate(305)
        fill(0)
        ellipse(0, 0, 40, 35)
        pop()
        fill(255)
        circle(7, -7, 18)
        circle(-6, 11, 10)
        noStroke()
        fill(255, 217, 247)
        ellipse(20, 10, 13, 5)
        pop()
        push()
        rotate(this.rEar)
        translate(0, -50)
        rotate(4)
        fill(255)
        beginShape()
        curveVertex(31, 4)
        curveVertex(31, 4)
        curveVertex(43, -3)
        curveVertex(63, -10)
        curveVertex(65, 10)
        curveVertex(61, 28)
        curveVertex(61, 28)
        endShape()
        pop()

        push()
        rotate(this.lEar)
        translate(0, -50)
        rotate(-4)
        fill(255)
        beginShape()
        curveVertex(-31, 4)
        curveVertex(-31, 4)
        curveVertex(-43, -3)
        curveVertex(-63, -10)
        curveVertex(-65, 10)
        curveVertex(-61, 28)
        curveVertex(-61, 28)
        endShape()
        pop()

        pop()
        push()
        translate(0, -218)
        noFill()
        stroke(117, 115, 114)
        strokeWeight(3)
        beginShape()
        curveVertex(8, 0)
        curveVertex(8, 0)
        curveVertex(6, 23)
        curveVertex(6, 23)
        endShape()
        beginShape()
        curveVertex(-11, 1)
        curveVertex(-11, 1)
        curveVertex(-11, 20)
        curveVertex(-11, 20)
        endShape()
        beginShape()
        curveVertex(23, 2)
        curveVertex(23, 2)
        curveVertex(21, 22)
        curveVertex(21, 22)
        endShape()
        pop()

        // console.log(mouseX - 283, mouseY - 377)
        pop()


        pop();
    }
}

class AustinDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.rotate = 0
        this.limbX = 25
        this.limbY = 25
        // add properties for your dancer here:
        //..
        //..
        //..
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        this.rotate = map(sin(frameCount * 0.11), -1, 1, -.15, .15)
    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.

        push();

        translate(this.x, this.y);
        noStroke()

        rotate(this.rotate)
        //body_upper
        fill(100, 50, 50)
        quad(-25, -25, 25, -25, 18, 25, -18, 25)
        fill(80, 40, 40)
        quad(1, 0, -1, 0, -1, -25, 1, -25)


        //arms
        fill(100, 50, 50)
        quad(-2 * this.limbX + 5, -2 * this.limbY - 5, -2 * this.limbX - 5, -2 * this.limbY + 5, -this.limbX + 5, -this.limbY + 15, -this.limbX + 15, -this.limbY + 5)
        quad(this.limbX - 15, -this.limbY + 5, 2 * this.limbX - 5, -2 * this.limbY - 5, 2 * this.limbX + 5, -2 * this.limbY + 5, this.limbX - 5, -this.limbY + 15)

        //hands
        fill(200, 0, 0)
        circle(2 * this.limbX, -2 * this.limbY, 20)
        circle(-2 * this.limbX, -2 * this.limbY, 20)

        //head
        fill(200, 0, 0)
        circle(0, -50, 60)

        //eyes
        fill(255)
        circle(-12, -50, 20)
        circle(12, -50, 20)

        fill(20)
        circle(-12, -50, 13)
        circle(12, -50, 13)

        //Mouth
        stroke(0)
        strokeWeight(2)
        noFill()
        arc(0, -38, 20, 12, 0.3, 2.5)
        pop();


        push()

        translate(this.x, this.y);
        noStroke()

        rotate(-this.rotate)

        //body_lower
        fill(0, 0, 200)
        quad(-25, 25, 25, 25, 22, 0, -22, 0)
        ellipse(0, 25, 50, 20)
        //legs
        quad(-this.limbX + 15, this.limbY + 5, -1.5 * this.limbX + 15, 2 * this.limbY + 5, -1.65 * this.limbX + 5, 2 * this.limbY - 5, -this.limbX + 5, this.limbY - 5)
        quad(this.limbX - 15, this.limbY + 5, 1.5 * this.limbX - 15, 2 * this.limbY + 5, 1.65 * this.limbX - 5, 2 * this.limbY - 5, this.limbX - 5, this.limbY - 5)

        //feet
        fill(0, 0, 100)
        arc(-1.5 * this.limbX + 6, 2 * this.limbY + 5, 20, 20, 3.6, TWO_PI + 0.6)
        arc(1.5 * this.limbX - 6, 2 * this.limbY + 5, 20, 20, 2.7, TWO_PI - 0.6)

        pop()
    }
}

