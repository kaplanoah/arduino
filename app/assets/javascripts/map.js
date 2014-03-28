function map(value, lower1, upper1, lower2, upper2) {
  var result;
  if ( lower1 == upper1 || lower2 == upper2 ) {
    return null;
  }
  else {
    var percentage = ( value - lower1 ) / ( upper1 - lower1 );
    var newValue = percentage * ( upper2 - lower2 ) + lower2;
    return Math.round(newValue);
  }
}