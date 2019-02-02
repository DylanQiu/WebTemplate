// completed
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
  });

// delete on X
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// add new event
$("input[type='text']").keypress(function(event){
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});
