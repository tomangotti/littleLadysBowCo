Rails.application.routes.draw do
  resources :users
  resources :logo_images
  resources :bows
  
  get '/logoLatest', to: 'logo_images#latest'
  delete "/logout", to: "sessions#destroy"
  post '/login', to: "sessions#create"
  get '/me', to: "users#show_me"
end
