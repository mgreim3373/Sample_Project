$(document).ready(function(){

	$("[data-js-page]").on("touchend", function(){
		var goal_page = $(this).data("js-page");
		console.log('hi', goal_page)
		$(".page").removeClass("active");
		$(".page[data-page='"+goal_page+"']").addClass("active");
	})

})
