Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      get :people, to: 'people#index'
      post 'people/all', to: 'people#create_all'

      resources :locations, only: [:index, :show]
      resources :affiliations, only: [:index, :show]

    end
  end

  # redirect to root due to SPA view
  get '*path', to: 'pages#index', via: :all
end
