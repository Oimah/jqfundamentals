$(function(){
$(".module").addClass("_module");
$('#myList li').eq(2).addClass("_mylist_li");
$('.label_for_search').addClass("_label_for_search");

alert($("input:hidden").length + " hidden input are available on this page");
count_all_attr();
select_odd_table_row();
$('.search_text').addClass("_search_text").parent("form").addClass("search_form");
$("#myList .current").removeClass("current")
              

$("#specials form").find('select>option:eq(1)').prop('selected', true).parent().parent().parent().parent().find("input:submit").css({'background':'green','color':'#fff','border':'none'})
//$("#specials form").find("input:submit").trigger("click")

$("#slideshow li").not(":eq(0)").addClass("disabled");
$("#slideshow li:first").addClass("current");
$("div.module:last").append("<h2>Another header</h2>").append("<p>Another paragraph</p>");
$("li>select>option").eq(2).after("<option value='Wednesday'>Wednesday</option>");
$("div.module:last").after("<div class='dynamicImageDiv'></div>");
$(".dynamicImageDiv").html($("ul#slideshow>li:first").find("img"));

appendListItem()
remove_odd_listitems()

function appendListItem(){
  var items = $("#myList li");
  for(var i=0;  i < 5; i++)
  {
    $("#myList").append("<li>New List " + (items.length + i + 1) + "</li>")
  }
}

function remove_odd_listitems(){
  $("#myList li").each(function() {
    var index = ($("#myList li").index(this) + 1) % 2;
    if(index === 0)
    {
      $(this).addClass("remove");
    }
  });
  $(".remove").remove();
}


function select_odd_table_row(){
$("table tbody tr").each(function() {
    var index = ($("table tbody tr").index(this) + 1) % 2;
    if(index != 0)
    {
      $(this).addClass("select_odd_table_row");
    }
});
}

function count_all_attr(){
var alt_attr_count = 0;
$("img").each(function() {
    if($(this).prop("alt")){
      console.log($(this).prop("alt"))
      alt_attr_count++
    };
});
alert(alt_attr_count + " images have alt attribute")
}


/*Array.prototype.sum =function() {
return this.reduce(function(previous, current) {
  return previous + current;
    });
};
var  numbers = [ 1, 2, 3, 4, 5, 6 ];
var result = numbers.sum();
//alert(result)
console.log(result);     
*/
       
})