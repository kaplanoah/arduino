function createCircularBuffer(bufferName, bufferLength){ // string, number
  window[bufferName] = [];
  for ( var i = 0; i < bufferLength; i++ ) {
    window[bufferName].push(null);
  }
  window[bufferName].pointer = 0;
}

function updateBuffer(buffer, value){ // variable, number
  buffer[buffer.pointer] = value;
  if ( buffer.pointer < buffer.length - 1 ) {
    buffer.pointer ++;
  } else {
    buffer.pointer = 0;
  }
}

function getBufferHistory(buffer) {
  var history = [];
  for ( var i = 0; i < buffer.length; i++ ) {
    if ( buffer[buffer.pointer] ) history.push(buffer[buffer.pointer]);
    if ( buffer.pointer < buffer.length - 1 ) {
      buffer.pointer ++;
    } else {
      buffer.pointer = 0;
    }
  }
  return history;
}

function getBufferPastValue(buffer, index) { // 0 is last added value
  if ( buffer.pointer - index - 1 >= 0 ) {
    return buffer[buffer.pointer - index - 1];
  } else {
    return buffer[buffer.length - 1 - index + buffer.pointer];
  }
}

function initializeCircularBuffers(length) {
  var bufferNames = ["lightHistory", "tempHistory", "volumeHistory", "soundHistory"];
  for (var i = 0; i < bufferNames.length; i ++) {
    createCircularBuffer(bufferNames[i], length);
  }
}