$( document ).on('turbolinks:load', function(){
  $(function(){
    if($('body').is('.typing')){
      typingGame();
    }
    introFace();
  });

 
 
});


var introFace = function() {
	  $('.intro').addClass('animated bounceInLeft');
	  $('.intro').addClass('animated swing');

}