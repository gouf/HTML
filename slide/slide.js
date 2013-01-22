$(document).ready(function(){
var currentPosition = 0;
var slideWidth = 300;
var slides = $('#wrap img');
var numberOfSlides = slides.length;
var slideShowInterval;
var speed = 3000;

slideShowInterval = setInterval(changePosition, speed);

slides.wrapAll('<div id="slidesHolder"></div>');

slides.css('float', 'left');

$('#slidesHolder').css('width', slideWidth * numberOfSlides);

for(var i = 0; i < numberOfSlides; i++){ $('#switch').append('<div class="box">&nbsp;</div>')}

function changePosition(){
  if(currentPosition >= numberOfSlides - 1){
    currentPosition = 0;
  }else{
    currentPosition++;
  }
  moveSlide();
  moveActiveSwitch();
}

function moveSlide() {
  $('#slidesHolder').animate({'marginLeft': slideWidth * (-currentPosition)});
}

function moveActiveSwitch(){
 $('.box').eq(currentPosition).css('background', 'black').siblings('div').css('background', 'silver');
}
});
