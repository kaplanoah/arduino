function updateLight(light) {
  updateBuffer(lightHistory, light);
  var red = map(light, 200, 1000, 0, 48);
  var green = map(light, 200, 1000, 8, 133);
  var blue = map(light, 200, 1000, 97, 227);

  c.fillStyle = skyColor;
  c.fillRect(lightWidth - 90, circleHeight - 90, 180, 180);

  c.fillStyle = 'rgb(' + red + ',' + green + ',' + blue +')';
  c.beginPath();
  c.arc(lightWidth, circleHeight, 90, 0, Math.PI * 2, true);
  c.fill();

  c.fillStyle = 'red';
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

  var red = map(temp, 120, 190, 0, 48);
  var green = map(temp, 120, 190, 0, 133);
  var blue = map(temp, 120, 190, 0, 227);
  c.fillStyle = 'rgb(' + red + ',' + green + ',' + blue +')';
  c.beginPath();
  c.arc(temperatureWidth, circleHeight, 90, 0, Math.PI * 2, true);
  c.fill();

  c.fillStyle = 'red';
  var widthOffset = 0;
  _.each(getBufferHistory(tempHistory), function(value){
    var newValue = map(value, 120, 190, 0, 90);
    c.fillRect(temperatureWidth - 90 + widthOffset, circleHeight - newValue + 90, 5, newValue);
    widthOffset = widthOffset + 6;
  })
};

function updateVolume(volume) {
  if ( volume < 400 ) {
    volume = 800 - volume;
  }

  updateBuffer(volumeHistory, volume);
  var red = map(volume, 400, 1200, 0, 48);
  var green = map(volume, 400, 1200, 0, 133);
  var blue = map(volume, 400, 1200, 0, 227);
  c.fillStyle = 'rgb(' + red + ',' + green + ',' + blue +')';
  c.beginPath();
  c.arc(soundWidth, circleHeight, 90, 0, Math.PI * 2, true);
  c.fill();

  c.fillStyle = 'red';
  var widthOffset = 0;
  _.each(getBufferHistory(volumeHistory), function(value){
    var newValue = map(value, 400, 1200, 0, 90);
    c.fillRect(soundWidth - 90 + widthOffset, circleHeight - newValue + 90, 5, newValue);
    widthOffset = widthOffset + 6;
  })
};

function updateSound(sound) {
  c.fillStyle = skyColor;
  c.fillRect(soundWidth - 90, circleHeight - 90, 180, 180);

  updateBuffer(soundHistory, sound);
  if (sound === true) {
    c.strokeStyle = 'red';
  } else {
    c.strokeStyle = 'lightgrey';
  }

  c.lineWidth = 9;
  c.beginPath();
  c.arc(soundWidth, circleHeight, 90, 0, Math.PI * 2, true);
  c.stroke();
};

function updateTree() {
  drawTreeSkyAndMountains();
}