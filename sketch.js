let grass = [];
let clouds = [];
let windDirection = 0;

function setup() {
    createCanvas(800, 800);

    for (let i = 0; i < 450; i++) {
        grass.push({
            x: random(width),
            h: random(25, 75),
            phase: random(TWO_PI),
            speed: random(0.7, 2.3),
            thickness: random(1, 3),
            r: random(100, 40),
            g: random(145, 85),
            b: random(85, 40)
        });
    }

    for (let i = 0; i < 5; i++) {
        clouds.push({
            x: random(width),
            y: random(100,180),
            w: random (160, 240),
            h: random (75, 80),
            speed: random(0.01, 0.03)
        })
    }
}

function draw() {
    background(51, 204, 255);
    noStroke();
    fill(100, 145, 85);
    rect(0, 650, width, 150);

    let windTarget;

    if (mouseX > width / 2) {
        windTarget = -1;
    } else {
        windTarget = 1;
    }


    windDirection = lerp(windDirection, windTarget, 0.055);

    for (let c of clouds){
        c.x +=  c.speed * windDirection *deltaTime;

        if (c.x > width + c.w / 2){
            c.x = -c.w / 2;
        } else {
            if (c.x < - c.w / 2){
                c.x = width + c.w / 2;
            }
        }

        fill(255);
        ellipse(
            c.x,
            c.y, 
            c.w, 
            c.h);

    }

    for(let g of grass) {
        let sway = sin(
            frameCount * 0.080 * g.speed + g.phase
        ) * 10;

        let bend = windDirection * 40 + sway;
        stroke(g.r, g.g, g.b);
        strokeWeight(g.thickness);
        noFill();

        bezier(
            g.x, 650,
            g.x + bend * 0.2, 650 - g.h * 0.3,
            g.x + bend * 0.7,650 - g.h * 0.8,
            g.x + bend, 650 - g.h
        );
    }
}