Rails.application.routes.draw do
  get '/typing' => 'typing#index'

  root 'welcome#index'
end
