// Variabler //
let light = document.getElementById("lyskugle");
let farve = 0; // Variable - globally declared as my_mqtt_function can change it

function setup() {
createCanvas(400,400);
}

function draw() {
 // background(besked);
  fill(mouseX);
  circle(200, 200, 200, 200);
}

function draw() 
{
  //background(farve);
  let val = mouseX;

  fill(farve);
  circle(200, 200, 200, 200);
  
  if(threshold(val,10))
  {
    sendMessage(val);
  }
  

}
