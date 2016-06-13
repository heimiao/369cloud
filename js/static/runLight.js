;
(function($) {
	var default_opt = {
		"width": 300, //总宽度
		"totalHeight": 300, //反向运动的高度
		"speed": 50, //滚动速度
		"background": "black", //背景色
		"fontSize": 12, //滚动字体的大小
		"color": "#fff",
		"lineHeight": 14
	}
	var RunLight = function(opt) {
		RunLight.setting = $.extend(default_opt, opt);
		this.each(function(i, m) {
			$(m).find("ul").css({
				"width": RunLight.setting.width,
				"height": RunLight.setting.totalHeight,
				"background": RunLight.setting.background,
				"margin:": 0,
				"padding": 0,
				"position": "relative",
				"overflow": "hidden"
			});
			$(m).find("li").each(function(j, n) {
				$(n).css({
					"list-style-type": "none",
					"color": RunLight.setting.color,
					"position": "absolute",
					"white-space:": "nowrap",
					"margin": "0",
					"width": "400%",
					"fontSize": RunLight.setting.fontSize,
					"top": RunLight.setting.lineHeight * j
				});
				if ((++j) % 2 > 0) {
					$(n).css({
						"left": 0,
					});
					RunLight.run(n, "left");
				} else {
					$(n).css({
						"right": 0,
					});
					RunLight.run(n, "right");
				}
			});
		});
	}
	RunLight.run = function(obj, point) {
		var sunWidth = RunLight.setting.width * 4;
		var i = 0,
			j = 0;
		var timeobj = setInterval(function() {
			if (point == "left") {
				if ((sunWidth - RunLight.setting.width) > -($(obj).position().left)) {
					$(obj).css({
						"left": -(i++)
					});
				} else {
					i = 0;
					$(obj).css({
						"left": i
					});
				}
			} else {
				if (($(obj).position().left) < 0) {
					$(obj).css({
						"right": -(j++)
					});
				} else {
					j = 0;
					$(obj).css({
						"right": j
					});
				}
			}
		}, RunLight.setting.speed);
	}
	$.fn.runLight = RunLight;
})($);