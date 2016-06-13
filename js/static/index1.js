$(function() {
	//反向跑马灯
	$(".marquee").runLight({
		"speed": 80,
		"width": 150,
		"totalHeight": 180,
		"background": "",
		"lineHeight": 14,
		"color": "#fff"
	});
	//  手机效果
	$(".addleft_center ul li").hover(
		function() {
			$(this).css({
				color: "#229bdc",
				background: "#fff"
			});
			var urls = $(this).find("img").attr("src");
			$(this).find("img").attr("src", urls.replace(/bai/, "lan"));
		},
		function() {
			$(this).css({
				color: "#fff",
				background: "#229bdc"
			});
			var url = $(this).find("img").attr("src");
			$(this).find("img").attr("src", url.replace(/lan/, "bai"));
		});
	$(".ct").click(function() {
		if ($(".ct img").position().left > 0) {
			$(".ct img").animate({
				left: 0
			}, 500);
		} else {
			$(".ct img").animate({
				left: 100
			}, 500);
		}
	});
	$(".childMenu").prev().click(function() {
		$(this).next(".childMenu").slideToggle();
	});
	/*菱形切换*/
	/*$(".overturn ul li").hover(
		function() {
			$(this).find("div").fadeIn();
		}, function() {
			$(this).find("div").fadeOut();
		});*/
	// /*最下变得的圆切换*/
	$(".ul a").hover(function() {
		if (document.body.clientWidth > 640) {
			$(this).find("div").show();
			$(this).find("span").show();
			$(this).find("div").stop().animate({
				"width": 123,
				"height": 123,
				"top": -14,
				"left": -14,
				"opacity": 1,
				"filter": "alpha(opacity=100)"
			}, 500);
		}
	}, function() {
		$(this).find("div").stop().animate({
			"width": 0,
			"height": 0,
			"top": "50%",
			"left": "50%",
			"opacity": 0,
			"filter": "alpha(opacity=0)"
		}, 500, function() {
			$(this).find("span").hide();
			$(this).find("div").hide();
		});
	});
	setInterval(function() {
		//随机1-19之间的数字
		$(".circleContainer a").css({
			"background": "#0088cc",
		});
		for (var k = 0; k <= 8; k++) {
			$(".circleContainer a").eq(Math.round(Math.random() * (69 - 1) + 1) - 1).css({
				"background": "#056595"
			});
		}
	}, 1000);
	var browser = navigator.appName
	var b_version = navigator.appVersion
	var version = b_version.split(";");
	if (version[1] != undefined) {
		var trim_Version = version[1].replace(/[ ]/g, "");
		if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0" || browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
			$(".c3_container").find("div[class^='shield']").hide();
			var imgdom = document.createElement("img");
			imgdom.setAttribute("class", "ie8_9bg");
			imgdom.src = "/img_/ie8_9bg.png";
			$(".sixquerbg").after(imgdom);
		}
	}
	//给ide下载一个下载地址http://test-dev.369cloud.com?ideinfo?ideinfoCallback=
	  $.ajax({
            url: config.devUrl+"/downloadInfo?infoCallback=?",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        });
		 
}); 
 
 
function infoCallback(data) {
	if(data[0].ideVersion.ideDownUrl){
		$(".downloadIDE").find("a").eq(1).attr("href", config.devUrl + "/ideDownloadWin?ideId=" +data[0].ideVersion.ideId);
	}else{
		$(".downloadIDE").find("a").eq(1).hide();
	}
	
	if(data[0].ideVersion.ideDownUrlMac){
		$(".downloadIDE").find("a").eq(0).attr("href", config.devUrl + "/ideDownloadMac?ideId=" + data[0].ideVersion.ideId);
	}else{
		$(".downloadIDE").find("a").eq(0).hide();
	}
}


function phone_animation() {
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
}