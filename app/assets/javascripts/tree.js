// adapted from Sameer Borate's Algorithmic Tree 1.0.0 (GPL)
// http://codediesel.com

var i;
var j;
var randomInts = [];
var randomInt;

function drawTreeSkyAndMountains(skyColor, mountainColor1, mountainColor2, mountainColor3, trunkColor, leafColor, updateTree, drawLightning) {

  drawSkyAndMountains(skyColor, mountainColor1, mountainColor2, mountainColor3, drawLightning);

  c.strokeStyle = trunkColor;
  var tree = {

    branchWidth:   30,
    leafSpread:    0.5,
    leafSize:      550,
    leafLength:    200,
    randomness:    0.9,

    draw : function() {
      c.translate(width / 2 - 300, height); // tree position
      c.lineWidth = this.branchWidth;
      this.leavesColor = leafColor;
      c.lineJoin = 'round';
      c.lineCap = 'round';
      c.save();
      this.branch(0);
      c.restore();
    },

    branch : function(depth) {
      if (depth < 12) {
        c.beginPath();
        c.moveTo(0,0);
        c.lineTo(0,-(height)/7);
        c.stroke();
        c.translate(0,-height/7);

        if ( updateTree === true ) {
          randomInts = [];
          for (i = 0; i < 300; i ++) {
            randomInts.push(-(Math.random() * 0.1) + 0.1)
          }
        } else {
          j = 0;
        }

        if ( randomInts[j] === randomInts[299] ) {
          j = 0;
        } else {
          j++;
        }

        randomInt = randomInts[j];

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