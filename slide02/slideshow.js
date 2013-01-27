(function($){
    // $.fn.slideshow = function(_width){
    $.fn.slideshow = function(_width, _speed){
        var slidewindow = $(this);
        var currentPosition = 0;
        // var slideWidth = 464;
        var slideWidth = _width;
        var slideShowInterval = 0; // it keeps setInterval()'s ID.
        // var speed = 150;
        var speed = _speed;
        var switches = slidewindow.find('.switch');
        var arrow_switch = slidewindow.find('.arrow_switch').parent();


        var slides = slidewindow.find('img');
        var slideShowInterval = setInterval(changePosition, speed);

        ///
        // Initialize elements.
        ///

        // Add div switch button.
        slidewindow.append($('<div class="switches" />'));
        for(var i = 0; i < slides.size(); i++){
            slidewindow.find('.switches').append('<div class="switch" />');
        }
        // Wrap all slide classes and wrap all .switch classes.
        slides.wrapAll($('<div class="slides" />'));
        slidewindow.find('.switches').wrapAll('<div class="switchWrap" />');
        // Set same width each slides.
        slides.parent('.slides').css('width', slideWidth * slides.size());
        
        // Wrap all img tags.
        for(var i = 0; i < slides.size(); i++){
            slides.eq(i).wrap('<div class="slide" />');
        }
        // Add arrow navigation
        slidewindow.append($('<div class="arrow_switch" />'));
        var buttonLeft  = $('<div class="buttonLeft">←</div>' );
        var buttonRight = $('<div class="buttonRight">→</div>');

        slidewindow.children().filter('.arrow_switch').append(buttonLeft).append(buttonRight);


        ///
        // Set CSS Attributes.
        ///

        slides.css({'float': 'left'});
        

        ///
        // Slide animate functions.
        ///
        function changePosition() {
            if(currentPosition < -1 ){
              currentPosition = slides.size() - 1;
            }else if(currentPosition == slides.size() - 1){
                currentPosition = 0;
            }else{
                currentPosition++;
            }
            moveSlide();
            moveActiveMark();
        }

        function moveSlide(){
            slides.parent().parent().animate({
                'marginLeft': slideWidth * (-currentPosition)
            });
        }

        function moveActiveMark(){
            var switches = slidewindow.find('.switch').eq(currentPosition);
            switches.css({background: 'black'}).siblings().css({background: 'silver'});
        }
        
        slidewindow.find('.switches > .switch').click(function clickToMove(){
            currentPosition = slidewindow.find('.switches > .switch').index(this) - 1;

            changePosition();
            clearInterval(slideShowInterval);
            slideShowInterval = setInterval(changePosition, speed);
        });

        slidewindow.find('.arrow_switch > .buttonLeft').click(function(){
            currentPosition -= 2; // back position
            changePosition();
            clearInterval(slideShowInterval);
            slideShowInterval = setInterval(changePosition, speed);
        });
        slidewindow.find('.arrow_switch > .buttonRight').click(function(){
            changePosition();
            clearInterval(slideShowInterval);
            slideShowInterval = setInterval(changePosition, speed);
        });
    };
})(jQuery);
