
function loadAjaxBlog(me){
  $(me).parent().parent().find("p").load( "blog/" + $(me).attr("data-file") , function( response, status, xhr ) {
  if ( status == "error" ) {
    var msg = "Sorry but there was an error: ";
    $( ".error" ).html( msg + xhr.status + " " + xhr.statusText );
  }
})
}