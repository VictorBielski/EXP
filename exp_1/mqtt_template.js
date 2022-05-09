// Variabler //
//let light = document.getElementById("lyskugle");
let farve = 0; // Variable - globally declared as my_mqtt_function can change it

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() 
{
  fill(farve);
  circle(200, 200, 200, 200);
}

// funktionen "bestemmer" farven på cirklen efter telefonens "position" på X aksen.
function deviceTurned() {
  if (turnAxis === 'X') {
    if (farve === 0) {
      farve = 255;
      sendMessage(farve);
    } else if (farve === 255) {
      farve = 0;
      sendMessage(farve);
    }
  }
}
