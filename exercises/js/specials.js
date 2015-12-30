var cachedJson = [];
var LoadData = function(){
  this.init();
}

LoadData.prototype = {
  init: function(){
    this.getSpecials();
    this.putContent(content)
  },


getSpecials: function(){
  var parent = this;
  $("select#day").change(function(){
  var specialDay = $(this).val();
  //alert(cachedJson.length)
  if(cachedJson.length === 0){
    $.ajax({
      method: 'Get',
      url: 'data/specials.json',
      dataType: 'json',
    })
    .done(function(data){
      cachedJson = data
      console.log(data[specialDay]);
      console.log("not cached => ");
      parent.putContent(data[specialDay])
    })
    .fail(function(jqXHR, textStatus){
      //alert( "Request failed: " + textStatus );
    })
}
  else
  {
     console.log(cachedJson[specialDay]);
     console.log("cached => ");
     parent.putContent(cachedJson[specialDay])
  }
  })
},

putContent: function (content){
  console.log("method")
  console.log(content);
  $(".title").text(content.title);
  $(".test").html(content.text);
  $(".img").prop("src",content.image);
}
}

var loadData;

$(document).ready(function(){
loadData = new LoadData();
})



