$(function() {
		//处理IE8的问题 
		$("input").blur();
		
		$(".data-panel input").focus(function() {
			$(this).parent(".input-group").addClass("focus");
		});
		$(".data-panel input").blur(function() {
			$(this).parent(".input-group").removeClass("focus");
		});
		
		$(".registerck").ck({
			"color": "black",
			"background": "#fff",
			"border": "1px solid #e3e3e3",
			"unckedUrl": "//g.369cloud.com/images/passport/img/unchecked.png",
			"ckedUrl": "//g.369cloud.com/images/passport/img/checked.png"
		});
		 lineCenter();
		 $(".rdfrm").validate(); 
		//密码找回所需事件
		$(".input-select").click(function() {
			$(".select").toggle();
		})
		$(".input-select").next("img").click(function() {
			$(".select").toggle();
		})
		$(".select li").click(function() {
			$(".input-select").val($(this).html());
			$(this).parent().hide();
		});
	})
var hc_flag=true;
 //判断内容区域的上下居中
window.onresize = function() {
	 lineCenter();
}

function lineCenter() { 
	var bodyH = Math.max(document.documentElement.clientHeight,$(".joinusmain").height());
	//判断手机
	var contH = $(".cetermodel").height();
	
	if(hc_flag){
		$(".js-hc").parent().show(); 
 	   var modelH = $(".js-hc").height();
 	   $(".js-hc").parent().hide();
 	   hc_flag=false;
	 } 
 	 if(modelH!=null){
		$(".js-hc").css({
		  "margin-top": (bodyH - modelH) / 2
	   });
	} 
	if(contH!=null){
		$(".cetermodel").css({
		  "margin-top": (bodyH - contH) / 2
	   });
	} 
} 
function shohide(){
	 $(".modal-dialog").find(".panel").toggle();
 }
/********************************************end***************************************/