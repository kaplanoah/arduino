class SiteController < ApplicationController
  
  def display
    @light = ARDUINO.analog_read 0
    sleep 0.01
    @temperature = ARDUINO.analog_read 1
    sleep 0.01
    @sound = ARDUINO.digital_read 2
    sleep 0.01
    @volume = ARDUINO.analog_read 2
    sleep 0.01
    
    respond_to do |f|
      f.html { render }
      f.json { render :json =>
        {
          :light => @light,
          :temperature => @temperature,
          :sound => @sound,
          :volume => @volume
        }
      }
    end
  end

end
