var treeRandomUpdate = Math.random();
var updateTree;
var sway;
var drawLeaves = 100;

function startAjaxCallsForSensorInputs(){

  setInterval(function ajaxCall() {
    treeRandomUpdate = Math.random();
    $.ajax({
      type: 'GET',
      url: '/input.json',
      success: function(data){
        console.log("Light: " + data.light);
        console.log("Temperature: " + data.temperature);
        console.log("Sound: " + data.sound);
        console.log("Volume: " + data.volume);

        // sway tree based on sound and randomly
        if ( data.sound === true ) {
          updateTree = true;
          sway = 0.07;
        } else if ( treeRandomUpdate < 0.07 ) {
          updateTree = true;
          sway = 0.01;
        } else {
          updateTree = false;
        }

        // set percentage of leaves to draw
        drawLeaves = map(data.temperature, 132, 141, 0, 100);

        updateLight(data.light, updateTree, sway, drawLeaves);
        // updateTemperature(data.temperature);
        // updateSound(data.sound);
        // updateVolume(data.volume);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        console.log("Status: " + textStatus);
        console.log("Error: " + errorThrown); 
      }
    })
  }, 100);

}