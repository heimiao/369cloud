$(function() {

	function IsPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
			"SymbianOS", "Windows Phone",
			"iPad", "iPod"
		];
		var isflag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				isflag = false;
				break;
			}
		}
		return isflag;
	}
	
	
	//判断
	$(".p_btn").click(function() {
		if ($(".m-nav").is(":hidden")) {
			$('.btn_imgSrc').attr("src", $('.btn_imgSrc').attr("src").replace(/navigation/, "page_btn-close"));
		} else {
			$('.btn_imgSrc').attr("src", $('.btn_imgSrc').attr("src").replace(/page_btn-close/, "navigation"));
		}
		$(".m-nav").slideToggle();
	})
	
	
	
	$.ajax({
		url: config.passportUrl + "/third/loginInfo?loginInfoCallback=?",
		type: "post",
		cache: false,
		async: false,
		dataType: "json",
		contentType: "application/json; charset=utf-8"
	});
	
	
	//判断导航给滚动
	if ($(document.body).width() < 768) {
		
		$(".m-nav").height($(window).height()).css({
			"overflowY": "auto"
		});
		
		$(".ulList").find(".dropdown-toggle").click(function() {
			$(this).next(".dropdown-menu").slideToggle();
			 
		});
		
	}
	
	//获取页面的所有连接
	var $_aArray = $("body").find("a");  
	if ($(document.body).width() > 1000) {
		//宽度大于1000的情况下
		if (Boolean($(".index_page").html()) || Boolean($(".page-home").html())) {
			$(".top_nav").find(".nav_bg").css({
				"opacity": .0,
				"filter": "alpha(opacity=0);"
			});
		} else {
			$(".top_nav").find(".nav_bg").css({
				"opacity": 1,
				"filter": "alpha(opacity=100);"
			});
		}
		
		//切换地址连接
		$.each($_aArray, function() {
			if (typeof $(this).attr("pc-href") != "undefined") {
				//判断a标签内部是否有手机连接地址
				$(this).attr("href", $(this).attr("pc-href"));
			}
		});
		
	} else {
		
		//赋值手机导航
		$.each($_aArray, function() {
			if (typeof $(this).attr("phone-href") != "undefined") {
				//判断a标签内部是否有手机连接地址
				$(this).attr("href", $(this).attr("phone-href"));
			}
		});

		//禁止链接
		$(".phone-nolink").click(function() {
			return false
		});

	}
	
	//pandu
	if (!Boolean($(".index_page").html()) && !Boolean($(".page-home").html())) {
		$(".top_nav").after("<div id='addheader' style='height:74px'></div>");
		$(window).scroll(function() {
			changeHeight();
		}); 
	} else { 
		if ($(document.body).width() > 1000) {
			$(window).scroll(function() {
				changeHeight();
				scrollNav();
			});
		} else {
			$(window).scroll(function() {
				changeHeight();
			});
			$(".top_nav").after("<div id='addheader' style='height:74px'></div>");
		}
	}
});

function scrollNav() {
	if ($(document.body).width() > 1000) {
		var _top = document.documentElement.scrollTop || document.body.scrollTop;
		if (_top < 74) {
			$(".top_nav .nav_bg").stop().animate({
				"opacity": .0,
				"filter": "alpha(opacity=0);"
			}, 300);
		} else {
			$(".top_nav .nav_bg").stop().animate({
				"opacity": 1,
				"filter": "alpha(opacity=100);"
			}, 300);
		}
	}
}

function changeHeight() {
	if ($(document.body).width() > 1000) {
		var _top = document.documentElement.scrollTop || document.body.scrollTop;
		if (_top < 74) {
			$(".top_nav").stop().animate({
				"height": "74px",
				"lineHeight": "74px"
			}, 300);
			$(".top_nav .logo").stop().animate({
				"width": "200",
			}, 300);

			//云学院
			if (typeof $(".leftAside") != "undefined") {
				$(".leftAside").stop().animate({
					"top": "74",
				}, 300);
			}
			
		} else {
			$(".top_nav").stop().animate({
				"height": "50px",
				"lineHeight": "50px"
			}, 300);
			$(".top_nav .logo").stop().animate({
				"width": "150",
			}, 300);

			//云学院
			if (typeof $(".leftAside") != "undefined") {
				$(".leftAside").stop().animate({
					"top": "50",
				}, 300);
			}

		}
	}
}

var isLogin = false; 
function loginInfoCallback(data) {
	var d = data[0];
	if (d.key == "ret.success") {
		var account_ = d.data.account.iconSmall;
		//后期回去掉
		/*$(".userInfo").show();
		$(".login").hide();
		$(".urserhead").find("img").attr("src", (account_ == null || account_ == "" || account_ == "null") ? config.root_address + "/img/user_head.png" : config.headUrl + account_);
		$(".urserhead").children("a").html(d.data.account.account);*/
		isLogin = true;
		$(".login_register").find(".login").hide();
		$(".login_register").find(".user").show();
		$(".login_register").find(".user").find("img").attr("src", (account_ == null || account_ == "" || account_ == "null") ? config.staticUrl + "/images/static/img/user_head.png" : config.headUrl + account_);
		$(".login_register").find(".user").find(".userName").html(d.data.account.account);
	} else {
		//后期回去掉
		/*$(".userInfo").hide();
		$(".login").show();*/
		isLogin = false;
		$(".login_register").find(".login").show();
		$(".login_register").find(".user").hide();
		//判断学习中心的
	}
}

function userLogin() {
	window.location.href = config.passportUrl + "/login?b=" + window.location.href;
}

function userRegister() {
	window.location.href = config.passportUrl + "/register"
}

function userExit() {
	$.ajax({
		url: config.passportUrl + "/third/logout?logoutCallback=?",
		type: "GET",
		dataType: "json",
		contentType: "application/json; charset=utf-8"
	});
}

function logoutCallback(data) {
	var d = data[0];
	$.getScript(d.data.URL0, function() {
		window.location.href = config.root_address;
		isLogin = false;
	});
}

//判断学习中心是否是视频详情页面
var lh = window.location.href;
if (/online_detail/img.test(lh)) {
	/*(function(m, ei, q, i, a, j, s) {
		
		m[a] = m[a] || function() {
			(m[a].a = m[a].a || []).push(arguments)
		};
		j = ei.createElement(q),
			s = ei.getElementsByTagName(q)[0];
		j.async = true;
		j.src = i;
		s.parentNode.insertBefore(j, s)
		
	})(window, document, 'script', '//eco-api.meiqia.com/dist/meiqia.js', '_MEIQIA');
	
	_MEIQIA('entId', 3089);*/
}