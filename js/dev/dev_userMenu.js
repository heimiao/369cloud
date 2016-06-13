$(function(){
	//初始化导航用户拉信息下拉效果
	$(".urserhead").hover(function() {
		if (!$(".urserconte").is(":animated")) {
			$(".urserconte").show();
		}
	}, function() {
		$(".urserconte").hide();
	});
})