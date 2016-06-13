define(['jquery', 'bootstrap'], function($) {
	//模态框居中模块
	  window.onresize = function() {
		eachmodal();
		console.log(11111);
	}  
	//模态框居中显示
	var flag = true;
	function eachmodal() {
		var bodyH = Math.max(document.documentElement.clientHeight, $(".joinusmain").height());
		if (flag) {
			$(".modal-dialog").parent().show();
			var modelH = $(".modal-dialog").height();
			$(".modal-dialog").parent().hide();
			flag = false;
		}
		if (modelH != null) {
			$(".modal-dialog").css({ 
				"margin-top": (bodyH - modelH) / 2
			});
		}
	}
	eachmodal(); 
})