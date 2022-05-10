let slider;
let farve = 0;


function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 255);
  slider.position(10, 10);
  slider.size(200);
  slider.addClass('sliderClass');
}

function draw() {
    fill(farve, farve, 0);
    circle(200, 200, 200, 200);
   // sendMessage(farve);
}

// TELEFONEN SKAL HOLDES I BEVÆGELSE FØR FARVEN OPDATERES PÅ COMPUTEREN
function deviceMoved() {
   // threesold = 0;
    farve = slider.value();
    sendMessage(farve);
  }

