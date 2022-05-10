let slider;
let farve = 0;


function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');
  slider.addClass('sliderClass');
}

function draw() {
  fill(farve, 100, 100);
  circle(200, 150, 200, 200);
  colRep();
}

function deviceTurned() {
  if (turnAxis === 'X') {
    farve = slider.value();
  }
  sendMessage(farve);
}

function colRep() {
  fill(slider.value(), 100, 100, 100);
  rect(180, 350, 40);
}


// 
/*function deviceTurned() {
  if (turnAxis === 'X') {

  }
}*/
