Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      get :people, to: 'people#index'
      post :people, to: 'people#create'
      #resources :locations
      #resources :affiliations
    end
  end

  # redirect to root for SPA
  get '*path', to: 'pages#index', via: :all
end
