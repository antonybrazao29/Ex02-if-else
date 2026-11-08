let grass = [];

function setup(){
  createCanvas(800. 800);

  for (let i = 0; i < 150; i++) {
    grass.push({
      x: random(width),
      h: random(25, 75),
      phase: random (TWO_PI),
      speed: random(0.7, 1.3);
      thickness: random(1,3)
    });
  }
}

function draw () {
  background(240, 240, 225);

  noStroke();
  FileList(100, 145, 85);

  for (let g of grass) {
    let wind = sin(
      frameCount * 0.035 * g.speed + g.phase
    );
    
  }
}
