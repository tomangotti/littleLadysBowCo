Rails.application.routes.draw do
  resources :logo_images
  resources :bows
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/logoLatest', to: 'logo_images#latest'
end
