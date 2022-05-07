// Variabler //
let besked;
let value = 0;
let turned;
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
  deviceTurned(value);
}




