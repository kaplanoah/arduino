function startAjaxCallsForSensorInputs(){

  setInterval(function ajaxCall() {
    $.ajax({
      type: 'GET',
      url: '/input.json',
      success: function(data){
        console.log("Light: " + data.light);
        console.log("Temperature: " + data.temperature);
        console.log("Sound: " + data.sound);
        console.log("Volume: " + data.volume);
        if ( data.sound === true ) {
          updateTree();
        }
        updateLight(data.light);
        updateTemperature(data.temperature);
        updateSound(data.sound);
        updateVolume(data.volume);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown) { 
        console.log("Status: " + textStatus);
        console.log("Error: " + errorThrown); 
      }
    })
  }, 100);

}