// adapted from http://cs.lmu.edu/~ray/notes/canvas/

function drawSkyAndMountains(skyColor, mountainColor1, mountainColor2, mountainColor3, drawLightning) {

  c.fillStyle = skyColor;
  c.fillRect(0, 0, width, height);

  if ( drawLightning ) {
    c.save();
    flashLightning();
    flashLightning();
    flashLightning();
    c.restore();
  }

  var x;
  var y;
  var ruggedness;
  var smoothing;
  var range = 0.9;

  scale = function (x) {
    if ( range === 0.9 ) {
      range = 0.4;
    } else if ( range === 0.5 ) {
      range = 0.9;
    } else {
      range = 0.5;
    }
    return -( x / 2.0 ) + x * range; //Math.random();
  };

  // Draws a fractal line by recursive decomposition, using the global ruggedness
  // value.  The line is drawn from (x,y) to (tox,toy).  After the line is drawn,
  // (x,y) is updated to the value of (tox, toy).
  fractalLine = function (tox, toy) {
      if (x + 1 > tox) {
          c.lineTo(x = tox, y = toy);
      } else {
          var midx = (x + tox) / 2,
              midy = (y + toy) / 2 + scale(ruggedness * (tox - x) * smoothing);
          fractalLine(midx, midy);
          fractalLine(tox, toy);
      }
  };

  drawMountain = function (ruggedValue, mountainColor, edgeHeight, smoothValue, drawLightning) {
      ruggedness = ruggedValue;
      smoothing = smoothValue;

      if ( drawLightning && smoothValue != 0.4 ) {
        c.shadowBlur = 15;
        c.shadowColor = 'rgb(255, 255, 200)';
      } else {
        c.shadowBlur = 5;
        c.shadowColor = mountainColor;
      }

      c.beginPath();
      c.moveTo(0, height);
      c.lineTo(x = 0, y = edgeHeight);
      fractalLine(width, edgeHeight);
      c.lineTo(width, height);
      c.closePath();
      c.fillStyle = mountainColor;
      c.fill();
      // c.fillStyle = "rgb(0, 0, 0)";
  };

  var mountainColors = [mountainColor1, mountainColor2, mountainColor3];
  var ruggedValues = [0.2, 0.4, 0.6];
  var edgeHeights = [height / 2.6, height / 2.1, height / 1.6];
  var smoothings = [1.3, 0.7, 0.4];

  for (var i = 0; i < 3; i++) {
    c.save();
    drawMountain(ruggedValues[i], mountainColors[i], edgeHeights[i], smoothings[i], drawLightning);
    c.restore();
  };

}