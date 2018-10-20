$(document).ready(function(){

$("[data-js-page]").on("touchend", function(){
	var goal_page = $(this).data("js-page")
	clearHomeContent()
	clearActiveClass()
	if(goal_page.includes('gov')) {
		var gov_image = $("[data-page='gov_left']")
		showGoalPage('hospit_right','slide_right', goal_page)
		centerGovImageFunc()
	} else if(goal_page.includes('right')) {
		var hospit_image = $("[data-page='hospit_right']")
		showGoalPage('gov_left', 'slide_left', goal_page)
		centerHospitImageFunc()
	}
})

$("[data-js-page='home']").on("touchend", function(){
	var goal_page = $(this).data("js-page")
	$(".page").removeClass("active slide_right slide_left")
	$(".flex-container > div").css({"display":"initial"})
	offsetGovImageFunc()
	offsetHospitImageFunc()
	$(".option_container").removeClass('explorePop')
	$(".inner_container").children().removeClass('explorePop')
})

$(".explore_button").on("touchend", function(){
	$(".option_container").addClass('explorePop')
	setTimeout(() => {
    $(".inner_container").children().addClass('explorePop')
}, 100);
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

const offsetHospitImageFunc = () => {
	$("[data-page='hospit_right']").addClass('offsetHospitImage')
	$("[data-page='hospit_right']").removeClass('centerHospitImage')

}
const offsetGovImageFunc = () => {
	console.log('hi')
	$("[data-page='gov_left']").addClass('offsetGovImage')
	$("[data-page='gov_left']").removeClass('centerGovImage')

}

const centerHospitImageFunc = () => {
	$("[data-page='hospit_right']").addClass('centerHospitImage')

}
const centerGovImageFunc = () => {
	$("[data-page='gov_left']").addClass('centerGovImage')

}
