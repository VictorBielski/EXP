let farve = 0;

function setup() {
createCanvas(400,400);
//slider = createSlider(0, 255, 0);
//slider.position(10, 10);
//slider.size(200);
}

function draw() 
{
  fill(farve);
  rect(200, 200, 200, 200);
}

function deviceMoved() {
  farve = farve + 5;
  if(accelerationX) {
    if (farve > 255) {
      farve = 0;
      sendMessage(farve);
    }
  }
}