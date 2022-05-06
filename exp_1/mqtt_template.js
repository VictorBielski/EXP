// Variabler //
let besked;
let value = 0;
let light = document.getElementById("lyskugle");

//light.style.backgroundColor = "blue";

function setup() {
  createCanvas(400, 400);
}

function draw() {
 // background(besked);
  fill(value);
  circle(200, 200, 200, 200);
  sendMessage(mouseX);
  console.log("hej");
}


function deviceTurned() {
  if (turnAxis === 'Y') {
    if (value === 0) {
      value = 255;
    } else if (value === 255) {
      value = 0;
    }
  }
}

