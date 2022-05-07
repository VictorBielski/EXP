
const myTopic ="lightControl";  //YOU MUST CHANGE THIS!


// --- CONNECTING--------------------------------------
client.on('connect', function() {
  console.log('connected!');
  client.subscribe(myTopic);
});



// --- SEND MESSAGE --------------------------------------
function sendMessage(msg)
{
  let JSONmsg = JSON.stringify(msg); //JSON.stringify turns any datatype into String/text
  client.publish(myTopic, JSONmsg);
}
// -- DEVICE TURNED --------------------------------------
function deviceTurned(value) {
  if (turnAxis === 'Y') {
    if (value === 0) {
      value = 255;
    } else if (value === 255) {
      value = 0;
    }
  }
  let turn = JSON.stringify(value);
  client.publish(myTopic, turn);
}



// --- RECEIVING MESSAGE --------------------------------------
client.on('message', function(topic, message) 
{
 let msg=JSON.parse(message); //Decode JSON string
 console.log(msg);
 besked = msg;

 let value=JSON.parse(message);
 console.log(value);
 turned = value;
 
 // do your thing here when a message arrives--------
});
