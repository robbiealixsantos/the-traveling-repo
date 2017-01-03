var frankPage = function(){

var introFace = function() {
    $('.intro').addClass('animated bounceInLeft');
   setTimeout(function() {
     $('.intro').removeClass('animated bounceInLeft');
    $('.intro').addClass('animated rotateIn');
    setTimeout(function() {
      $('.intro').removeClass('animated rotateIn');
      $('.intro').addClass('animated flipOutY');
    },1000)

   }, 1000);
   setTimeout(function(){
       $('.intro').css("display","none");
   },2000);

}

introFace();

setTimeout(function() { 
	flappy();
},2000);
};