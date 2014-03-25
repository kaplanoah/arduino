      var skyRed;       var skyGreen;       var skyBlue;
var mountain1Red; var mountain1Green; var mountain1Blue;
var mountain2Red; var mountain2Green; var mountain2Blue;
var mountain3Red; var mountain3Green; var mountain3Blue;
    var trunkRed;     var trunkGreen;     var trunkBlue;
     var leafRed;      var leafGreen;      var leafBlue;

var previousLight;
var difference;

function updateLight(light, updateTree) {

  difference = light - previousLight;
  previousLight = light;

  updateBuffer(lightHistory, light);

  skyRed = map(light, 200, 1000, 0, 172);
  skyGreen = map(light, 200, 1000, 8, 218);
  skyBlue = map(light, 200, 1000, 64, 255);
  skyColor = 'rgb(' + skyRed + ',' + skyGreen + ',' + skyBlue + ')';
  if ( difference > 150 ) {
    c.save();
    // flashLightning();
    c.restore();
  }

  mountain1Red = map(light, 200, 1000, 81, 221);
  mountain1Green = map(light, 200, 1000, 55, 209);
  mountain1Blue = map(light, 200, 1000, 94, 227);
  mountainColor1 = 'rgb(' + mountain1Red + ',' + mountain1Green + ',' + mountain1Blue + ')';

  mountain2Red = map(light, 200, 1000, 71, 201);
  mountain2Green = map(light, 200, 1000, 38, 190);
  mountain2Blue = map(light, 200, 1000, 87, 207);
  mountainColor2 = 'rgb(' + mountain2Red + ',' + mountain2Green + ',' + mountain2Blue + ')';

  mountain3Red = map(light, 200, 1000, 45, 192);
  mountain3Green = map(light, 200, 1000, 8, 173);
  mountain3Blue = map(light, 200, 1000, 64, 201);
  mountainColor3 = 'rgb(' + mountain3Red + ',' + mountain3Green + ',' + mountain3Blue + ')';

  trunkRed = map(light, 200, 1000, 54, 112);
  trunkGreen = map(light, 200, 1000, 29, 61);
  trunkBlue = map(light, 200, 1000, 16, 46);
  trunkColor = 'rgb(' + trunkRed + ',' + trunkGreen + ',' + trunkBlue + ')';

  leafRed = map(light, 200, 1000, 12, 62);
  leafGreen = map(light, 200, 1000, 59, 184);
  leafBlue = map(light, 200, 1000, 13, 64);
  leafColor = 'rgb(' + leafRed + ',' + leafGreen + ',' + leafBlue + ')';

  drawTreeSkyAndMountains(skyColor, mountainColor1, mountainColor2, mountainColor3, trunkColor, leafColor, updateTree);

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
    c.strokeStyle = 'CC0000';
  } else {
    c.strokeStyle = 'white';
  }

  c.lineWidth = 9;
  c.beginPath();
  c.arc(soundWidth, circleHeight, 90, 0, Math.PI * 2, true);
  c.stroke();
};