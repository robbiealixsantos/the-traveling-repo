$( document ).on('turbolinks:load', function(){

  $(function(){
    if($('body').is('.typing')){
      typingGame();
    }
  });

  $(function(){
    if($('body').is('.frank-body')){
      frankPage();
    }
  });

});


