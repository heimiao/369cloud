define(['jquery'],function(){
	$(".applaySet-cont .set_screen").click(function(){
		$(".set_screen").removeClass("set_active");
		$(this).css("border","0").siblings("div").css("border","1px solid #cdcdcd");
		$(this).addClass("set_active");
	})
})
define(['jquery'],function(){
	$("#updateLogBtn").click(function(){
		$(this).addClass("active1");
		$("#operationLogBtn").removeClass("active1");
	})
	$("#operationLogBtn").click(function(){
		$(this).addClass("active1");
		$("#updateLogBtn").removeClass("active1");
	})
})