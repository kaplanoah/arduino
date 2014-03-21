Arduino::Application.routes.draw do

  root to: 'site#display'
  get '/input', to: 'site#display'
  get '/upload', to: 'site#upload'

end
