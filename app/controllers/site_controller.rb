class SiteController < ApplicationController
  
  def display
    @message = "Hello world"

    respond_to do |f|
      f.html { render }
      f.json { render :json => { :message => @message } }
    end
  end

  def upload
    arduino = ArduinoFirmata.connect ARGV.shift
    arduino.pin_mode 13, ArduinoFirmata::OUTPUT
    arduino.digital_write 13, true
    redirect_to :root
  end

end
