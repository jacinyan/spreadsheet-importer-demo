Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      get :people, to: 'people#index'
      post 'people/all', to: 'people#create_all'

      get :locations, to: 'locations#index'
      get :affiliations, to: 'affiliations#index'

    end
  end

  # redirect to root for single page view
  get '*path', to: 'pages#index', via: :all
end
