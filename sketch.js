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