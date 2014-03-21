class SiteController < ApplicationController
  
  def display
    @message = "Hello world"
    
    # arduino = ArduinoFirmata.connect ARGV.shift
    # arduino.pin_mode 13, ArduinoFirmata::OUTPUT
    # arduino.digital_write 13, true
    # sleep 1
    # arduino.digital_write 13, false
    # sleep 1

    respond_to do |f|
      f.html { render }
      f.json { render :json => { :message => @message } }
    end
  end

end
