$(document).ready(function(){

  var slide = new Slide;
  slide.setSize($('#wrap img').length);
  slide.setWidth(300);
  slide.setParent($('#wrap'));
  slide.setNodes($('#wrap img'));
  slide.makeSlidesHolder(slide.getNodes());
  slide.makeWrapOfSlides();
  $('#slidesHolder .slide').css('float', 'left');
  $('#slidesHolder').css('width', slide.getWidth() * slide.getSize());

  var timer = new Timer;
  timer.interval = 3000;
  setInterval(slide.animate, timer.interval);
  // timer.stop();
});

var Slide = function(){
  _currentPosition = 0;
  _width = 0;
  _size = 0;
  _slideWindowID = '';
  _imgElements = '';
  /*
  var slides;
  var size = 0;
  //*/

  this.getCurrentPosition = function(){return _currentPosition;}
  this.setCurrentPosition = function(currentPosition){_currentPosition = currentPosition;}
  this.getSize = function(){return _size;}
  this.setSize = function(size){_size = size;}
  this.getParent = function(){return _parent;}
  this.setParent = function(parent){_parent = parent;}
  this.getNodes = function(){return _nodes;}
  this.setNodes = function(nodes){_nodes = nodes;}
  this.makeSlidesHolder = function(jqNodes){
    jqNodes.wrapAll('<div id="slidesHolder"></div>');
  }
  this.makeWrapOfSlides = function(){
    for(var i = 0; i < _size; i++){
      _nodes.eq(i).wrap('<div class="slide"></div>');
    }
  }
  this.animate = function(){
    changePosition();
    moveSlide();
    // movePositionsMark();
    console.log('Animate called.');
  }

  function changePosition(){
    if(_currentPosition >= _size - 1){
      _currentPosition = 0;
    }else{
      _currentPosition++;
    }
  }
  function moveSlide(){
    $('#slidesHolder').animate({'marginLeft': _width * (-_currentPosition)});
  }
  function movePositionsMark(){
    box.eq(this.currentPosition).css('background', 'black').siblings('div').css('background', 'silver');
  }
}

Timer = function(){
  var target;
  this.getInterval = function(){
    return this.interval;
  }
  this.setInterval = function(interval){ this.interval = interval;}

  // this.target = function(func){this.target = func;}
  setTarget = function(func){this.target = func;}
  this.stop = function(){
    window.clearInterval(this.intervalID);
  }
  this.start = function(){
    this.intervalID = window.setInterval(this.target, this.interval);
  }
}
