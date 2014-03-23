class SiteController < ApplicationController
  
  def display
    @light = ARDUINO.analog_read 0
    @temperature = ARDUINO.analog_read 1
    @sound = ARDUINO.digital_read 2
    @volume = ARDUINO.analog_read 2
    
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
