var fireFlyCoords;

function drawFireflies(move) {
  if ( move || !fireFlyCoords ) {
    fireFlyCoords = [];
    for(var i = 0; i < 30; i++) {
      fireFlyCoords.push({width: Math.random() * width, height: Math.random() * height + 200});
    }
  }
  for(var i = 0; i < 30; i++) {
    c.fillStyle = "yellow";
    c.fillRect(fireFlyCoords[i]['width'], fireFlyCoords[i]['height'], 3, 3);
  }
}
