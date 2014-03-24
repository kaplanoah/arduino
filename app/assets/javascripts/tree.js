// adapted from developer Sameer Borate's Algorithmic Tree 1.0.0 (GPL)
// http://codediesel.com

function drawTree(c, width, height) {

  var tree = {

    branchWidth:   17,
    leafSpread:    0.4,
    leafSize:      500,
    leafLength:    200,
    randomness:    0.9,

    draw : function() {
      c.translate(width / 2 - 300, height); // tree position
      c.lineWidth = this.branchWidth;
      this.leavesColor = 'green';
      c.lineJoin = 'round';
      this.branch(0);
    },

    branch : function(depth) {
      if (depth < 12) {
        c.beginPath();
        c.moveTo(0,0);
        c.lineTo(0,-(height)/10);
        c.stroke();
        c.translate(0,-height/10);

        // random integer from -0.1 to 0.1
        var randomInt = -(Math.random() * 0.1) + 0.1;

        c.rotate(randomInt);

        switch(this.randomness)
        {
        case 0.9:
          this.randomness = 0.1;
          break;
        case 0.1:
          this.randomness = 0.2;
          break;
        case 0.2:
          this.randomness = 0.7;
          break;
        default:
          this.randomness = 0.9;
        }

        if ((this.randomness * 1) < this.leafSpread)  {
          // left branches
          c.rotate(-0.35);
          c.scale(0.7, 0.7);
          c.save();
          this.branch(depth + 1);

          // right branches
          c.restore();
          c.rotate(0.6);
          c.save();
          this.branch(depth + 1);
          c.restore();
        } else {
          this.branch(depth);
        }
      } else {
        // draw leaves
        c.fillStyle = this.leavesColor;
        c.fillRect(0, 0, this.leafSize, this.leafLength);
        c.stroke();
      }
    }
  };

  c.save();
  tree.draw();
  c.restore();

}