class SiteController < ApplicationController
  
  def display
    arduino = ArduinoFirmata.connect ARGV.shift
    @light = arduino.analog_read 0

    respond_to do |f|
      f.html { render }
      f.json { render :json => { :light => @light } }
    end
  end

  def upload
    arduino = ArduinoFirmata.connect ARGV.shift

    # initialize constants
    arduino.pin_mode 13, ArduinoFirmata::OUTPUT
    
    # setup
    arduino.digital_write 13, true

    redirect_to :root
  end

end
