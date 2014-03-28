var fireFlyCoords;

function drawFireflies(move) {
  if ( move || !fireFlyCoords ) {
    fireFlyCoords = [];
    for (var i = 0; i < 30; i++) {
      fireFlyCoords.push({width: Math.random() * width, height: Math.random() * height + 200});
    }
  }
  for (var k = 0; k < 30; k++) {
    c.fillStyle = "yellow";
    c.fillRect(fireFlyCoords[k].width, fireFlyCoords[k].height, 3, 3);
  }
}