let slider;
let val;
let r = 0;
let g = 0;
let b = 0;

function setup() {
//createCanvas(400, 400);
// colorMode(RGB, 255);
  slider = createSlider(0, 255, 0);
  slider.position(10, 10);
  slider.size(200);
  slider.addClass('sliderClass');
}

function draw() {
    val = slider.value();
    background(val, val, 0);
}