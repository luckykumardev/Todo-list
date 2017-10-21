     // Check off specific Todos By Click
$("ul").on("click","li",function(){
   $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){

$(this).parent().fadeOut(1500,function(){    //here "this" is "Span"
$(this).remove();     //here "this" is "li"

});

event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
 if(event.which === 13)
 {
 	//grabing new todos text
var todoText = $(this).val();
$(this).val("");
//create a new li and add to ul 
$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+" " + todoText + "</li>")
}
});
$("fa-times").click(function(){


	$("input[type='text']").fadeToggle();
});