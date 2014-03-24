var skyRed;
var skyGreen;
var skyBlue;

var mountain1Red;
var mountain1Green;
var mountain1Blue;

var mountain2Red;
var mountain2Green;
var mountain2Blue;

var mountain3Red;
var mountain3Green;
var mountain3Blue;

var trunkRed;
var trunkGreen;
var trunkBlue;

var leafRed;
var leafGreen;
var leafBlue;

function updateLight(light) {
  updateBuffer(lightHistory, light);

  skyRed = map(light, 200, 1000, 27, 175);
  skyGreen = map(light, 200, 1000, 29, 212);
  skyBlue = map(light, 200, 1000, 59, 237);
  skyColor = 'rgb(' + skyRed + ',' + skyGreen + ',' + skyBlue + ')';

  mountain1Red = map(light, 200, 1000, 0, 48);
  mountain1Green = map(light, 200, 1000, 0, 48);
  mountain1Blue = map(light, 200, 1000, 0, 48);
  mountainColor1 = 'pink';

  mountain2Red = map(light, 200, 1000, 0, 48);
  mountain2Green = map(light, 200, 1000, 0, 48);
  mountain2Blue = map(light, 200, 1000, 0, 48);
  mountainColor2 = 'pink';

  mountain3Red = map(light, 200, 1000, 0, 48);
  mountain3Green = map(light, 200, 1000, 0, 48);
  mountain3Blue = map(light, 200, 1000, 0, 48);
  mountainColor3 = 'pink';

  trunkRed = map(light, 200, 1000, 0, 48);
  trunkGreen = map(light, 200, 1000, 0, 48);
  trunkBlue = map(light, 200, 1000, 0, 48);
  trunkColor = 'pink';

  leafRed = map(light, 200, 1000, 0, 48);
  leafGreen = map(light, 200, 1000, 0, 48);
  leafBlue = map(light, 200, 1000, 0, 48);
  leafColor = 'pink';

  drawTreeSkyAndMountains(skyColor, mountainColor1, mountainColor2, mountainColor3, trunkColor, leafColor);

  // light input and history visualization
  c.fillStyle = skyColor;
  c.fillRect(lightWidth - 90, circleHeight - 90, 180, 180);

  var circleRed = map(light, 200, 1000, 0, 48);
  var circleGreen = map(light, 200, 1000, 8, 133);
  var circleBlue = map(light, 200, 1000, 97, 227);

  c.fillStyle = 'rgb(' + circleRed + ',' + circleGreen + ',' + circleBlue +')';
  c.beginPath();
  c.arc(lightWidth, circleHeight, 90, 0, Math.PI * 2, true);
  c.fill();

  c.fillStyle = 'CC0000';
  var widthOffset = 0;
  _.each(getBufferHistory(lightHistory), function(value){
    var newValue = map(value, 200, 1000, 0, 90);
    c.fillRect(lightWidth - 90 + widthOffset, circleHeight - newValue + 90, 5, newValue);
    widthOffset = widthOffset + 6;
  })
};

function updateTemperature(temp) {
  updateBuffer(tempHistory, temp);

  // temperature input and history visualization
  c.fillStyle = skyColor;
  c.fillRect(temperatureWidth - 90, circleHeight - 90, 180, 180);

  var circleRed = map(temp, 120, 190, 0, 48);
  var circleGreen = map(temp, 120, 190, 0, 133);
  var circleBlue = map(temp, 120, 190, 0, 227);
  c.fillStyle = 'rgb(' + circleRed + ',' + circleGreen + ',' + circleBlue +')';
  c.beginPath();
  c.arc(temperatureWidth, circleHeight, 90, 0, Math.PI * 2, true);
  c.fill();

  c.fillStyle = 'CC0000';
  var widthOffset = 0;
  _.each(getBufferHistory(tempHistory), function(value){
    var newValue = map(value, 120, 190, 0, 90);
    c.fillRect(temperatureWidth - 90 + widthOffset, circleHeight - newValue + 90, 5, newValue);
    widthOffset = widthOffset + 6;
  })
};

function updateVolume(volume) {

  // volume input and history visualization
  if ( volume < 400 ) {
    volume = 800 - volume;
  }

  updateBuffer(volumeHistory, volume);
  var circleRed = map(volume, 400, 1200, 0, 48);
  var circleGreen = map(volume, 400, 1200, 0, 133);
  var circleBlue = map(volume, 400, 1200, 0, 227);
  c.fillStyle = 'rgb(' + circleRed + ',' + circleGreen + ',' + circleBlue +')';
  c.beginPath();
  c.arc(soundWidth, circleHeight, 90, 0, Math.PI * 2, true);
  c.fill();

  c.fillStyle = 'CC0000';
  var widthOffset = 0;
  _.each(getBufferHistory(volumeHistory), function(value){
    var newValue = map(value, 400, 1200, 0, 90);
    c.fillRect(soundWidth - 90 + widthOffset, circleHeight - newValue + 90, 5, newValue);
    widthOffset = widthOffset + 6;
  })
};

function updateSound(sound) {
 
  // sound input and history visualization
  c.fillStyle = skyColor;
  c.fillRect(soundWidth - 90, circleHeight - 90, 180, 180);

  updateBuffer(soundHistory, sound);
  if (sound === true) {
    c.strokeStyle = 'circleRed';
  } else {
    c.strokeStyle = 'lightgrey';
  }

  c.lineWidth = 9;
  c.beginPath();
  c.arc(soundWidth, circleHeight, 90, 0, Math.PI * 2, true);
  c.stroke();
};