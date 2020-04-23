//check of specific todos by clicking
$("ul").on("click" , "li",function(){
	$(this).toggleClass("completed");
});

//CLICK ON X TO DELETE TODO
$("ul").on("click" , "span" , function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation(); //it stops it from bubbling up the other elements
});

$("input[type='text']").keypress(function(event){
	if(event.which ===13){        //enter has 13 character code
		//grabbing  a new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to new ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")

	}
});

$(".fa-arrow-circle-down").click(function(){
	$("input[type='text']").fadeToggle()
});