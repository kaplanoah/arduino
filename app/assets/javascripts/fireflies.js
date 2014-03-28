function drawFireflies() {
  for(var i = 0; i < 30; i++) {
    c.fillStyle = "yellow";
    c.fillRect(Math.random() * width, Math.random() * height + 200, 3, 3);
  }
}
