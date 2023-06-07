Rails.application.routes.draw do
  resources :carts
  resources :admins
  resources :users
  resources :logo_images
  resources :bows
  
  get '/logoLatest', to: 'logo_images#latest'
  delete "/logout", to: "sessions#destroy"
  post '/login', to: "sessions#create"
  get '/me', to: "users#show_me"
  get '/admin', to: "admins#show_me"
  post '/admin_login', to: "sessions#create_admin"
  get '/cart/users/:id', to: "carts#get_user_cart"
end
