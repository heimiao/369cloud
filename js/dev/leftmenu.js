define(['jquery', 'scrollMenu'], function($) {
	//左侧菜单所有效果模块
	$(".apply-nav>img").click(function() {
		if ($(".min_leftMenu").html() == undefined) {
			//改变左侧导航
			$(".leftMenu").addClass("min_leftMenu");
			//改变右边内容块
			$(".rightCont").css("margin-left", "50px");
		} else {
			//改变左侧导航
			$(".leftMenu").removeClass("min_leftMenu");
			//改变右边内容块
			$(".rightCont").css("margin-left", "150px");
		}
	});
	//左侧菜单上下压缩
	$(".menu_title").click(function() {
		if($(this).next("ul").css('display')=="block"){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace(/open/img,"close"));
		}else{
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace(/close/img,"open"));
		}
		$(this).next("ul").slideToggle(); 
	});
	//添加滚动条
	scrollleft();
	window.onresize = function() {
		scrollleft();
	}
	function scrollleft() {
		$('#scrollmenu').height($(".leftMenu").height() - 110);
		$("#scrollmenu").mCustomScrollbar({
			theme: "minimal"
		});
	};
});