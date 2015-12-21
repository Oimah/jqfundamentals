var prevTabText;

$("div.module h2").each(function(){
  $(".dynamicUl").append("<li class="+ $(this).text().toLowerCase() +">" + $(this).text() + "</li>")
})
$("#blog p.excerpt ").hide();


$(".dynamicUl>li").bind({click: tabFunction})

$(".dynamicUl>li:first").trigger("click");

function tabFunction(){
 var tabtext =  $(this).text().toLowerCase();
 $(this).addClass("current")
 $("."+prevTabText).removeClass("current");
 if(prevTabText !== null || prevTabText !==undefined || prevTabText !=="")
 {
  $("#" + prevTabText).addClass("hide");
 }
  $("#" + tabtext).removeClass("hide");
  prevTabText = tabtext;
}

$("ul>li>h3>a").click(function(event){
  event.preventDefault();
   loadAjaxBlog(this);
  $(this).parent().parent().find("p.excerpt").slideDown("slow", function(){
    $("._current").slideUp("fast");
    $(this).addClass("_current").slideDown()
  })
});


