function Slider( container, nav ){
  this.container = container;
  this.nav = nav;
  this.imgs = this.container.find("img");
  this.imgWidth = this.imgs[0].width;
  this.imgLength = this.imgs.length;
  this.current = 0;
  this.totalImageLength = this.imgLength * this.imgWidth;
}

Slider.prototype.setIndicator = function(imageCount) {
  for(var i = 1; i <= imageCount; i++){
    $(".indicator").append('<a href="#" data-pos="'+ i +'">' + i + '</a>')
  }
};

Slider.prototype.transition = function(coord) {
  this.container.animate({
      "margin-left": coord ||  -(this.current * this.imgWidth )
    });
};

Slider.prototype.setCurrent = function(dir){
  this.current += (~~(dir === "Next") || -1);
   this.current = (this.current < 0) ? this.imgLength - 1 : this.current % this.imgLength;
    var indicatorCount = $("div.indicator").find("a");
    for(var i = 0; i< indicatorCount.length; i++){
      var element = $("div.indicator").find("a").eq(i);
      var data = element.data("pos");
      if(data - 1 == this.current){
        indicatorCount.removeClass("_current")
        element.addClass("_current") ;
      }
    }
   return  this.current;
}

Slider.prototype.slide = function(){
  var that = this;
  that.nav.show().find("button").on("click", function(){
    that.setCurrent($(this).data("dir"));
    that.transition();
    })
}

$(document).ready(function(){
  
  var slider = new Slider($("div.slider ul"), $("#slider-nav"));
  slider.setIndicator(slider.imgLength);
  slider.slide();
  $("div.indicator a:first").addClass("_current") ;
})
