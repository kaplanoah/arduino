ARDUINO = ArduinoFirmata.connect ARGV.shift

# initialize constants
ARDUINO.pin_mode 13, ArduinoFirmata::OUTPUT

# setup
ARDUINO.digital_write 13, true