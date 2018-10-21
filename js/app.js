$(document).ready(function(){

	// Page navigation functions start
	$("[data-js-page]").on("touchend", function(){
			var goal_page = $(this).data("js-page")
			clearEntryContent()
			clearActiveClass()

			// If clicked button is government, show government page
			if(goal_page.includes('gov')) {
				showGoalPage('health_outer_container','slide_right', goal_page)
				centerGovImage()
			// If clicked button is health, show health page
			} else if(goal_page.includes('health')) {
				showGoalPage('gov_outer_container', 'slide_left', goal_page)
				centerHealthImage()
			// If clicked button is entry, show entry page
			} else {
					$(".page").removeClass("slide_right slide_left")
					showEntryContent()
					offsetGovImage()
					offsetHealthImage()
					clearModalAnimation()
			}
		})
		// Page navigation functions end

	// Explore modal function start
	$(".gov_explore_button").on("touchend", function(){
		$(".gov_option_container").addClass('explore_modal')
		setTimeout(() => {
	    $(".gov_inner_container").children().addClass('explore_modal')
		}, 100)
	})
	// Explore modal function end
})

//Clear active class from all page views
const clearActiveClass = () => {
	$(".page").removeClass("active")
}

//Clear entry page content
const clearEntryContent = () => {
	$(".entry_flex_container > div").css({"display":"none"})
}

//Slide non-goal page view off screen and reveal goal page view
const showGoalPage = (nonGoalPage, nonGoalPageAction, goalPage) => {
	$(".page[data-page='"+nonGoalPage+"']").addClass(nonGoalPageAction)
	$(".page[data-page='"+goalPage+"']").addClass("active")
}

//Center goal-page background image position
const centerHealthImage = () => {
	$("[data-page='health_outer_container']").addClass('center_health_image')
}
const centerGovImage = () => {
	$("[data-page='gov_outer_container']").addClass('center_gov_image')
}

//Clear explore modal content
const clearModalAnimation = () => {
	$(".gov_option_container").removeClass('explore_modal')
	$(".gov_inner_container").children().removeClass('explore_modal')
}

//Offset images for entry view
const offsetHealthImage = () => {
	$("[data-page='health_outer_container']").addClass('offset_health_image')
	$("[data-page='health_outer_container']").removeClass('center_health_image')
}
const offsetGovImage = () => {
	console.log('hi')
	$("[data-page='gov_outer_container']").addClass('offset_gov_image')
	$("[data-page='gov_outer_container']").removeClass('center_gov_image')
}

//Show entry content
const showEntryContent = () => {
	$(".entry_flex_container > div").css({"display":"initial"})
}
