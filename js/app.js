$(document).ready(function(){

$("[data-js-page]").on("touchend", function(){
	var goal_page = $(this).data("js-page")
	clearHomeContent()
	clearActiveClass()
	if(goal_page.includes('gov')) {
		var gov_image = $("[data-page='gov_left']")
		showGoalPage('hospit_right','slide_right', goal_page)
		recenterImage(gov_image)
	} else if(goal_page.includes('right')) {
		var hospit_image = $("[data-page='hospit_right']")
		showGoalPage('gov_left', 'slide_left', goal_page)
		recenterImage(hospit_image)
	}
})

$("[data-js-page='home']").on("touchend", function(){
	var goal_page = $(this).data("js-page")
	var hospit_image = [$("[data-page='hospit_right']"), "-250px"]
	var gov_image = [$("[data-page='gov_left']"), "250px"]
	$(".page").removeClass("active slide_right slide_left")
	$(".flex-container > div").css({"display":"initial"})
	$(".option_container").addClass('hide')
	offsetImage(hospit_image[0], hospit_image[1])
	offsetImage(gov_image[0], gov_image[1])
	(".option_container").css(({"display":"initial"}))
})

$(".explore_button").on("touchend", function(){
	$(".option_container").removeClass('hide')
})

})


const clearActiveClass = () => {
	$(".page").removeClass("active")
}

const showGoalPage = (currPage, currPageAction, goalPage) => {
	$(".page[data-page='"+currPage+"']").addClass(currPageAction)
	$(".page[data-page='"+goalPage+"']").addClass("active")
}

const clearHomeContent = () => {
	$(".flex-container > div").css({"display":"none"})
}

const recenterImage = (goalBackgroundImage) => {
	goalBackgroundImage.css({"background-position":"0px"})
}

const offsetImage = (goalBackgroundImage, offsetValue) => {
	goalBackgroundImage.css({"background-position":offsetValue})
}
