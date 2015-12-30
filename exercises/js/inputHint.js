var labeltext = $(".label_for_search").text();
$(".input_text").addClass("hint").val(labeltext)
$(".label_for_search").remove();

$(".input_text").bind({
  focus:removeHint,
  blur:addHint
})

function removeHint(){
  if( $(this).val() === labeltext){
  $(this).val("").removeClass("hint")
}
}

function addHint(){
  if( $(this).val() === null || $(this).val() === undefined ||  $(this).val() === "" ){
  $(this).val(labeltext).addClass("hint")
}
}


