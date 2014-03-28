// adapted from Arturs Sosins' (ar2rsawseen) script
// http://webcodingeasy.com/JS-classes/Javascript-lightning-effect

var startX;
var startY;
var endX;
var endY;

var lightning = function(config){

  var conf = {
    detail:      1,
    displace:    500,
    glowWidth:   1,
    boltWidth:   3,
    boltColor:   'rgb(255, 255, 200)',
    glowColor:   'white',
    glowAlpha:   0.1
  };
  
  this.show = function(startX, startY, endX, endY){
    drawLightning(startX, startY, endX, endY, conf.displace);
  };
  
  function drawLightning(x1, y1, x2, y2, displace){
    if ( displace < conf.detail ) {
      //glow around lightning
      c.lineCap = 'round';
      c.strokeStyle = 'white';
      c.globalAlpha = conf.glowAlpha;
      c.lineWidth = conf.glowWidth;
      c.lineJoin = 'round';
      c.shadowBlur = 10;
      c.shadowColor = conf.glowColor;
      c.beginPath();
      c.moveTo(x1,y1);
      c.lineTo(x2,y2);
      c.stroke();

      //draw bolt
      c.strokeStyle = conf.boltColor;
      c.globalAlpha = 1;
      c.lineWidth = conf.boltWidth;
      c.beginPath();
      c.moveTo(x1,y1);
      c.lineTo(x2,y2);
      c.stroke();
    }
    else {
      var midx = ( x2 + x1 ) / 2;
      var midy = ( y2 + y1 ) / 2;
      midx = midx + ( Math.random() - 0.5 ) * displace;
      midy = midy + ( Math.random() - 0.5 ) * displace;
      drawLightning(x1, y1, midx, midy, displace / 2);
      drawLightning(x2, y2, midx, midy, displace / 2);
    }
  }
};

function flashLightning(){
  var lt = new lightning();
  startX = Math.floor( (Math.random()*(width - width/4)) + (width/4) );
  startY = 0;
  endX = Math.floor((Math.random()*width) + 1);
  endY = height / 2;
  lt.show(startX, startY, endX, endY);
}