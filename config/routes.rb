Arduino::Application.routes.draw do

  root to: 'site#display'
  get '/input', to: 'site#display'
  post '/input', to: 'site#display'

end
