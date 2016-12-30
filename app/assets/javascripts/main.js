$( document ).on('turbolinks:load', function(){
  $(function(){
    if($('body').is('.typing')){
      typingGame();
    }
  });
});