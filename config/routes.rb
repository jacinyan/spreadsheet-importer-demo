Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :people
      resources :locations
      resources :affiliations
    end
  end

  # redirect to root for SPA
  get '*path', to: 'pages#index', via: :all
end
