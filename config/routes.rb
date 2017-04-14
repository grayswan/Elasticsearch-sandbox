Rails.application.routes.draw do
  resources :songs

  root 'songs#index'

  get '/search' => 'songs#search', as: :search

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
