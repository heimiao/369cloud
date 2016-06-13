define(['jquery', 'bootstrap', 'scrollMenu'], function($) {
	function scroll_cminfo() {
		$.each($(".scroll_cminfo"), function() {
			$(this).mCustomScrollbar({
				theme: "minimal"
			});
		});
	}
	scroll_cminfo();
	//定义弹框
	 $("#recentlycompil").click(function(){
	 	$(".unbg-panel").slideToggle();
	 })
	 
})