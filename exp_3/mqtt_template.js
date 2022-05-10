let slider;
let farve = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  circle(200, 200, 200, 200);
  fill(farve, 100, 100, 1);
  farve = slider.value();
}

function deviceTurned() {
  if (turnAxis === 'X') {
    sendMessage(farve);
  }
}

// 
/*function deviceTurned() {
  if (turnAxis === 'X') {

  }
}*/
