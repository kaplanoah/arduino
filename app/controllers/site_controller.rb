class SiteController < ApplicationController
  
  def display
    @message = "Hello world"

    respond_to do |f|
      f.html { render }
      f.json { render :json => { :message => @message } }
    end
  end

end
