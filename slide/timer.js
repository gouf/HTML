Timer = function(){
  _target = '';
  this.getInterval = function(){
    return this.interval;
  }
  this.setInterval = function(interval){ this.interval = interval;}

  // this.target = function(func){this.target = func;}
  this.setTarget = function(func){_target = func;}
  this.stop = function(){
    window.clearInterval(this.intervalID);
  }
  this.start = function(){
    this.intervalID = this.setInterval(this.target, this.interval);
  }
}
