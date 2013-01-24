var Slide = function(){
  this.initialize.apply(this, arguments);
}

Slide.prototype = {
  initialize: function(_slidesWindow, _imageWidth){
    this.slidesWindow = _slidesWindow;
    this.imageWidth    = _imageWidth;
    this.slidesParent  = $(this.slidesWindow);
    this.imgElements  = $(this.slidesWindow).children('img');
  },

  hoge: function(){alert('hoge');}
}
