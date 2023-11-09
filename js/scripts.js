jQuery(document).ready(function($) {

	if ( self !== top ) {
		$('body').addClass('is-iframe');
	}

	$("button.colour").click(function(){
		$("ul.icons").toggleClass("colour");
		$(this).toggleClass("active");
		$(".language-css.colour").toggleClass("hide");
	});

	$("button.shadow").click(function(){
		$("ul.icons").toggleClass("shadow");
		$(this).toggleClass("active");
		$(".language-css.shadow").toggleClass("hide");

	});

	$("button.gradient").click(function(){
		$("ul.icons").toggleClass("gradient");
		$(this).toggleClass("active");
		$(".language-css.gradient").toggleClass("hide");

	});

	$("button").click(function(){
		if ($(this).find("span").text() == "Add"){
			$(this).find("span").text("Remove");
		}
		else{
    		$(this).find("span").text("Add");
    	};
	});
});