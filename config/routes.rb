Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      get :people, to: 'people#index'
      post :people, to: 'people#create'

    end
  end

  # redirect to root for single page view
  get '*path', to: 'pages#index', via: :all
end
