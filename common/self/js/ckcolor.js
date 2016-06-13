define(['jquery'], function($) {
	var defalutopt = {
		//系统变量
		"flag": false,
		//自定义变量
		"color": "black",
		"background": "#fff",
		"border": "1px solid #eee",
		"borderRadius": 5,
		"width": 22,
		"unckedUrl": "",
		"ckedUrl": "",
		"height": 22
	}
	var colorCk = function(_option) {
		colorCk.setings = $.extend(defalutopt, _option);
		this.each(function(i, m) {
			//创建复选框
			 colorCk.createCheckBox(m);
			//绑定事件
			colorCk.addEvent(m);
		})
	};
	colorCk.addEvent = function(m) {
		$(m).click(function() {
			if ($(this).children("input").attr("checked")) { 
				$(this).children("input").attr("checked", false);
			} else {
				$(this).children("input").attr("checked", true);
			}  
			colorCk.createCheckBox(this);
		});
	};
	colorCk.createCheckBox = function(m) {
		//隐藏该元素下的复选框$(m).find("input")[0].style.visibility = "hidden";
		$(m).find("input").hide();
		$(m).css({
			//不可控的属性
			textAlign: "center",
			overflow: "hidden",
			fontSize: 12,
			cursor: "pointer",
			padding: 0,
			//可控的属性值 
			width: colorCk.setings.width,
			height: colorCk.setings.height,
			border: colorCk.setings.border,
			background: colorCk.setings.background,
			//只是支持高版本的属性
			borderRadius: colorCk.setings.borderRadius
		});
		colorCk.verdictChecked(m);
	}; 
	colorCk.verdictChecked = function(m) {
		//判断是否选择-----前提判断是否是默认的选中方式
		var dom = null;
		if (colorCk.setings.ckedUrl) {
			dom = document.createElement("img");
			dom.setAttribute("class", "cked");
			dom.src = colorCk.setings.ckedUrl;
			colorCk.verdictInput(m, dom);
		} else {
			//采用默认的选中方式
			dom = document.createElement("span");
			dom.setAttribute("class", "cked");
			dom.style.color = colorCk.setings.color;
			dom.innerHTML = "√"
			colorCk.verdictInput(m, dom);
		}
	};
	colorCk.verdictInput = function(m, dom) {
		if ($(m).children("input").attr("checked")) {
			//判断是否有备用未选中的图片
			if (colorCk.setings.unckedUrl) {
				$(m).css({
					border: 0
				});
				$(m).find(".cked").remove();
				$(m).append(dom);
			} else {
				$(m).append(dom);
			}
		} else {
			if (colorCk.setings.unckedUrl) {
				$(m).css({
					border: 0
				});
				dom.src = colorCk.setings.unckedUrl;
				$(m).find(".cked").remove();
				$(m).append(dom);
			} else {
				$(m).find(".cked").remove();
			}
		}
	}
	$.fn.ck = colorCk;
})