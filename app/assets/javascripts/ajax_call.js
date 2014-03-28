var treeRandomUpdate = Math.random();
var updateTree;
var sway = 0.01;
var drawLeaves = 100;

// counter to reduce frequency of leaf updates
var leavesCounter = 0;

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
        if ( leavesCounter === 0 ) {
          drawLeaves = map(data.temperature, 133, 141, 0, 100);
          leavesCounter = 5;
          if ( drawLeaves < 1 ) leavesCounter = 40;
        } else {
          leavesCounter --;
        }

        // overwrite sound input to always update tree if no leaves
        if ( drawLeaves === 0 ) updateTree = true;

        updateCanvas(data.light, updateTree, sway, drawLeaves);

        // display input visualizations
        // updateLight(data.light);
        // updateTemperature(data.temperature);
        // updateSound(data.sound);
        // updateVolume(data.volume);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        console.log("Status: " + textStatus);
        console.log("Error: " + errorThrown); 
      }
    });
  }, 100);

}