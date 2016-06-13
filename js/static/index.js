//监听滚动加载导航的不透明度
//window.onscroll = function() {
//	scrollNav();
//	changeHeight();
//}

setTimeout(function() {
	if (isLogin) {
		$(".J_register").hide();
	} else {
		$(".J_register").show();
	}
}, 500)


videojs.options.flash.swf = "fonts/video-js.swf";

$(function() {
	$(".zb_content").mCustomScrollbar({
		set_width: "100%",
		set_height: false,
		horizontalScroll: true,
		scrollInertia: 0,
		mouseWheel: "auto",
		autoDraggerLength: true,
	});

	$(".prj_desc").mCustomScrollbar({
		set_width: "100%",
		set_height: false,
		horizontalScroll: false,
		scrollInertia: 0,
		mouseWheel: "auto",
		mouseWheel: true,
		autoDraggerLength: true,
	});

	$('#video-box-modal').on('shown.bs.modal', function(e) {
		resetVideoSize(myPlayer);
	});
})

function resetVideoSize(myPlayer) {
	var videoJsBoxWidth = $("#video-box").width();
	var ratio = 1440 / 810;
	var videoJsBoxHeight = videoJsBoxWidth / ratio;
	$(myPlayer.el_).height(videoJsBoxHeight);
}

var myPlayer = videojs("video-box").ready(function() {
	this.src({
		type: "video/mp4",
		src: "demo/myvideo.mp4"
	});
	resetVideoSize(this);
	this.on("ended", function() {
		//保存当前视频的播放位置
		_this.lastTime = 0;
	});
	//监听播放进度
	this.on("timeupdate", function(data) {
		//						_this.lastTime = this.currentTime();
	});
	this.on('pause', function() {
		//						_this.savePlayTime(_this.lastTime);
	});
	this.on('abort', function() {});
	this.on('progress', function() {
		//_this.lastTime = this.currentTime();
		//_this.savePlayTime(_this.lastTime);
	});
	this.play();
});

window.onresize = function() {
		resetVideoSize(myPlayer);
	}
	//
var projectType = {
	1: "教育",
	2: "音乐",
	3: "购物",
	4: "视频",
	5: "母婴",
	6: "健康",
	7: "体育",
	8: "金融",
	9: "儿童",
	10: "新闻",
	11: "杂志报刊",
	12: "摄影",
	13: "生活",
	14: "旅游",
	15: "工具",
	16: "社交",
	17: "娱乐",
	18: "导航",
	19: "媒体",
	20: "餐饮",
	21: "财经",
	22: "通讯",
	23: "办公",
	24: "理财",
	25: "房产",
	26: "汽车",
	27: "其他"
}

$.ajax({
	type: 'get',
	url: config.crowdUrl + '/devp/dev/squareListJsonP?_=1461905653831',
	dataType: 'jsonp',
	async: false,
	cache: false,
	jsonp: "jsoncallback",
	jsonpCallback: "callBackSquareListJsonP",
	success: function(data) {
		var compiled_class = _.template($(".J_zbList").html());
		var ary = data[0].data.list;
		$.each(ary, function() {
			var _this = this;
			for (var item in projectType) {
				if (_this.type == item) {
					$.extend(_this, {
						type: projectType[item]
					});
				}
			}
		});
		var htmlStr = compiled_class({
			list: data[0].data.list
		});
		$(".scrollBox").append(htmlStr);
	}
});