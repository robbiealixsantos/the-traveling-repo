$( document ).on('turbolinks:load', function(){
  $(function(){
    if($('body').is('.typing')){
      typingGame();
    }
  });

  $(function(){
    if($('div').is('#flappy')){
      frankPage();
    }
  });
});


