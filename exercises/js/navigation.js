$("ul#nav li").bind({
  mouseenter:mouseEnter,
  mouseleave:mouseOut
})

function mouseEnter(){
  $(this).find("ul").addClass("display_submenu");
}

function mouseOut(){
  $(this).find("ul").removeClass("display_submenu");
}
