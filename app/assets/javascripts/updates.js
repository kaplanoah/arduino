      var skyRed;       var skyGreen;       var skyBlue;
var mountain1Red; var mountain1Green; var mountain1Blue;
var mountain2Red; var mountain2Green; var mountain2Blue;
var mountain3Red; var mountain3Green; var mountain3Blue;
    var trunkRed;     var trunkGreen;     var trunkBlue;
     var leafRed;      var leafGreen;      var leafBlue;

// declare or initialize light variables
var difference;
var drawLightning;
var flashedLightning = false;
var lightBeforeFlash;
var flashCounter = 0;

function updateCanvas(light, updateTree, sway, drawLeaves) {

  updateBuffer(lightHistory, light);

  if ( getBufferPastValue(lightHistory, 1) ) difference = light - getBufferPastValue(lightHistory, 1);

  if ( ( difference > 30 ) && ( light > 800 ) ) {
    drawLightning = true;
    flashedLightning = true;
    flashCounter = 5;
    lightBeforeFlash = getBufferPastValue(lightHistory, 1);
  } else {
    drawLightning = false;
  }

  // if ( light is low enough and temperature is high enough ) {
    drawFireflies();
  // };

  function assignColorValues(lightValue) {

    skyRed = map(lightValue, 200, 1000, 0, 172);
    skyGreen = map(lightValue, 200, 1000, 8, 218);
    skyBlue = map(lightValue, 200, 1000, 64, 255);
    skyColor = 'rgb(' + skyRed + ',' + skyGreen + ',' + skyBlue + ')';

    mountain1Red = map(lightValue, 200, 1000, 81, 221);
    mountain1Green = map(lightValue, 200, 1000, 55, 209);
    mountain1Blue = map(lightValue, 200, 1000, 94, 227);
    mountainColor1 = 'rgb(' + mountain1Red + ',' + mountain1Green + ',' + mountain1Blue + ')';

    mountain2Red = map(lightValue, 200, 1000, 71, 201);
    mountain2Green = map(lightValue, 200, 1000, 38, 190);
    mountain2Blue = map(lightValue, 200, 1000, 87, 207);
    mountainColor2 = 'rgb(' + mountain2Red + ',' + mountain2Green + ',' + mountain2Blue + ')';

    mountain3Red = map(lightValue, 200, 1000, 45, 192);
    mountain3Green = map(lightValue, 200, 1000, 8, 173);
    mountain3Blue = map(lightValue, 200, 1000, 64, 201);
    mountainColor3 = 'rgb(' + mountain3Red + ',' + mountain3Green + ',' + mountain3Blue + ')';

    trunkRed = map(lightValue, 200, 1000, 54, 112);
    trunkGreen = map(lightValue, 200, 1000, 29, 61);
    trunkBlue = map(lightValue, 200, 1000, 16, 46);
    trunkColor = 'rgb(' + trunkRed + ',' + trunkGreen + ',' + trunkBlue + ')';

    leafRed = map(lightValue, 200, 1000, 12, 52);
    leafGreen = map(lightValue, 200, 1000, 59, 184);
    leafBlue = map(lightValue, 200, 1000, 13, 64);
    leafColor = [leafRed, leafGreen, leafBlue];

    if ( flashedLightning ) flashCounter --;
    if ( flashCounter === 0 ) flashedLightning = false;

  }

  if ( flashCounter > 0 ) {
    assignColorValues(lightBeforeFlash);
  } else {
    assignColorValues(light);
  }

  drawTreeSkyAndMountains(skyColor, mountainColor1, mountainColor2, mountainColor3, trunkColor, leafColor, updateTree, drawLightning, sway, drawLeaves);

};

function updateLight(light) {
  // light buffer updated in updateCanvas above

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
  updateBuffer(volumeHistory, volume);

  if ( volume < 400 ) {
    volume = 800 - volume;
  }

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
  updateBuffer(soundHistory, sound);
 
  c.fillStyle = skyColor;
  c.fillRect(soundWidth - 90, circleHeight - 90, 180, 180);

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