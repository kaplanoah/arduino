// adapted from Sameer Borate's Algorithmic Tree 1.0.0 (GPL)
// http://codediesel.com

var i;
var j = 0;
var randomNums = [];
for (i = 0; i < 100; i ++) {
  randomNums.push(-(Math.random() * 0.01) + 0.01);
}
var randomNum;

function drawTreeSkyAndMountains(skyColor, mountainColor1, mountainColor2, mountainColor3, trunkColor, leafColor, updateTree, drawLightning, sway, drawLeaves) {

  drawSkyAndMountains(skyColor, mountainColor1, mountainColor2, mountainColor3, drawLightning);

  c.strokeStyle = trunkColor;
  var tree = {

    branchWidth:   33,
    leafSpread:    0.5,
    leafSize:      590,
    leafLength:    200,
    randomness:    0.9,

    draw : function() {
      j = 0;
      c.translate(width / 2 - 290, height); // tree position
      c.lineWidth = this.branchWidth;

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
        c.lineTo(0,-(height)/7.1);
        c.stroke();
        c.translate(0,-height/7.1);

        if ( updateTree === true ) {
          randomNums = [];
          for (i = 0; i < 300; i ++) {
            randomNums.push(-(Math.random() * sway) + sway); // 0.01 - 0.1
          }
        }

        // start from beginning ( j = 0 ) at new tree

        if ( randomNums[j] === randomNums[299] ) {
          j = 0;
        } else {
          j++;
        }

        randomNum = randomNums[j];
        c.rotate(randomNum);

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
        leafPercentage = Math.floor((Math.random()*100)+0);
        if ( leafPercentage < drawLeaves ) {
          randomLeafColor = Math.floor((Math.random()*15)+1);
          c.fillStyle = this.leavesColor = 'rgb(' + ( leafColor[0] - randomLeafColor ) + ',' + ( leafColor[1] - randomLeafColor ) + ',' + ( leafColor[2] - randomLeafColor ) + ')';
          c.fillRect(0, 0, this.leafSize, this.leafLength);
          c.stroke();
        }
      }
    }
  };

  c.save();
  tree.draw();
  c.restore();

}