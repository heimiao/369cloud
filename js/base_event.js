//首页的手机效果
function indexScroll() {
	var _top = document.documentElement.scrollTop || document.body.scrollTop;
	if (phoneBool && _top >= 3240 && _top <= 3570) {
		$(".ct img").stop().animate({
			"left": 100
		}, 500);
		$(".childMenu").slideDown();
		var z = 0;
		var timestop = null;
		timestop = setInterval(function() {
			$(".addleft_center ul li").css({
				color: "#fff",
				background: "#229bdc"
			});
			if (z < 10) {
				$(".addleft_center ul li").each(function(k, l) {
					$(this).css({
						color: "#fff",
						background: "#229bdc"
					});
					var url = $(this).find("img").attr("src");
					$(this).find("img").attr("src", url.replace(/lan/, "bai"));
				});
				$(".addleft_center ul li").eq(z).css({
					color: "#229bdc",
					background: "#fff"
				});
				$(".addleft_center ul li").eq(z).find("img").attr("src", $(".addleft_center ul li").eq(z).find("img").attr("src").replace(/bai/, "lan"));
			} else {
				clearInterval(timestop);
			}
			z++;
		}, 300);
		phoneBool = false;

	}
	if ((!phoneBool) && _top <= 3240 || _top >= 3570) {
		phoneBool = true;
		$(".ct img").stop().animate({
			"left": 0
		}, 500);
		$(".childMenu").slideUp();
	}
}
/*平常滚动*/
function otherScroll() {
	var st = $(this).scrollTop();
	if (st > 0) {
		$("header .nav").stop().animate({
			height: '60px',
			lineHeight: '60px'
		}, 300);
		$(".header .navBg").stop().animate({
			opacity: '0.9',
			filter: 'alpha(opacity=90)',
			height: '60px'
		}, 300)
		$(".header .logo").stop().animate({
			height: '60px',
			lineHeight: '60px'
		}, 300)
	} else {
		$("header .nav").stop().animate({
			height: '74px',
			lineHeight: '74px'
		}, 300);
		$(".header .navBg").stop().animate({
			opacity: '0.2',
			filter: 'alpha(opacity=20)',
			height: '74px'
		}, 300)
		$(".header .logo").stop().animate({
			height: '74px',
			lineHeight: '74px'
		}, 300)
	};
}

Date.prototype.Format = function(fmt) { //author: meizz 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}


//美恰
/* (function(m, ei, q, i, a, j, s) {
	m[a] = m[a] || function() {
		(m[a].a = m[a].a || []).push(arguments)
	};
	j = ei.createElement(q),
		s = ei.getElementsByTagName(q)[0];
	j.async = true;
	j.charset = 'UTF-8';
	j.src = i + '?v=' + new Date().getUTCDate();
	s.parentNode.insertBefore(j, s);
})(window, document, 'script', '//eco-api.meiqia.com/dist/meiqia.js', '_MEIQIA');
_MEIQIA('entId', 3089); */















