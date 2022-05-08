// Variabler //
<<<<<<< Updated upstream
let besked;
let value = 0;
let turned;
let light = document.getElementById("lyskugle");

//light.style.backgroundColor = "blue";
=======
//let light = document.getElementById("lyskugle");
let farve = 0; // Variable - globally declared as my_mqtt_function can change it
>>>>>>> Stashed changes

function setup() {
  createCanvas(400, 400);
}

<<<<<<< Updated upstream
function draw() {
 // background(besked);
  fill(value);
  circle(200, 200, 200, 200);
  sendMessage(mouseX);
  console.log("hej");
  deviceTurned(value);
}




=======
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
>>>>>>> Stashed changes
