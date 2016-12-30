Rails.application.routes.draw do
  get '/typing' => 'typing#index'
  get '/flappy' => 'flappy#index'
  root 'welcome#index'
end
