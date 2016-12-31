$( document ).on('turbolinks:load', function(){

  $(function(){
    if($('container').is('#typing')){
      typingGame();
    }
  });

  $(function(){
    if($('body').is('.frank-body')){
      frankPage();
    }
  });

});


