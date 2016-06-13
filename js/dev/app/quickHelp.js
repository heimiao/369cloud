$(function() {
	$(".help_down").click(function() {
		$(".quick_help").addClass("help_samll");
	});
	$(".help_close").click(function() {
		$(".quick_help").fadeOut();
	});
	$(".dev_hlep_switch span").click(function() {
		$(".quick_help").removeClass("help_samll");
	});
})