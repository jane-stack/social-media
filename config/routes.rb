Rails.application.routes.draw do

  resources :posts do
    resources :comments, except: [:show]
    resources :likes, only: [:create, :destroy]
  end
  resources :users, only: [:destroy]

  # Users
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # Sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Likes
  get '/likes', to: 'likes#likes'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
