class SiteController < ApplicationController
  
  $arduino = ArduinoFirmata.connect ARGV.shift

  def display
    @light = $arduino.analog_read 0
    @temperature = $arduino.analog_read 1
    
    respond_to do |f|
      f.html { render }
      f.json { render :json => { :light => @light, :temperature => @temperature } }
    end
  end

  def upload
    # initialize constants
    $arduino.pin_mode 13, ArduinoFirmata::OUTPUT
    
    # setup
    $arduino.digital_write 13, true

    redirect_to :root
  end

end
