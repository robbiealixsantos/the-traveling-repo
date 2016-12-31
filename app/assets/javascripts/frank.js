var frankPage = function(){

var introFace = function() {
    $('.intro').addClass('animated bounceInLeft');
   setTimeout(function(){
     $('.intro').removeClass('animated bounceInLeft');
    $('.intro').addClass('animated rotateIn');
    setTimeout(function(){
      $('.intro').removeClass('animated rotateIn');
      $('.intro').addClass('animated flipOutY');
    },1000)

   }, 1000);

}

introFace();
flappy();
};