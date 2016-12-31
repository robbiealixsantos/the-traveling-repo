Rails.application.routes.draw do
  get '/typing' => 'typing#index'
  get '/frank' => 'frank#index'

  root 'welcome#index'
end
