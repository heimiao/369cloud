//验证表单    参数统一为dom对象不为jquery对象
(function($) {
	var validateObj = {};
	var globalflag = true;
	var validate = function() {
		validateObj.globalfalg = true; 
		this.each(function(_n, _m) {
			validateObj.foreachForm(_m);
		}); 
		globalflag = false;
		return validateObj.globalfalg;
	}
/* var validateObj = {};
	var globalflag = true;
	var validate = function() {
		validateObj.globalfalg = true;
		//循环表单   
		if(globalflag){
			validateObj._init();
		}else{ 
			validateObj.foreachForm(this[0]);
		}
		return validateObj.globalfalg;
	}
	
	validateObj._init =function(){
		$("body").find("form").each(function(_n,_m){
			validateObj.foreachForm(_m);
		});
		globalflag = false;
	}*/
	//系统默认提示信息
	validateObj.v_info = {
			valid: "验证码不一致",
			vrepwd: "两个密码不一致",
			vphone: "请输入有效的电话",
			vemail: "请输入有效的Email",
			vname: "请输入有效的用户名",
			vdate_: "请输入有效的时间",
			vpwd: "请输入有效的密码",
			vagmt: "请确认遵守协议"
		}
		//定义系统插件自带常用的正则表达式 
	validateObj.RegExs = {
		valid: null,
		vrepwd: null,
		vphone: /^1[34578]\d{9}$/,
		vemail: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
		vname: /^(?![0-9]+$)[a-zA-Z0-9_]{2,15}$/,//(?![0-9]+$)/,//(?![0-9]+$)/,//^[^\s](?![0-9]+$)[a-zA-Z][a-zA-Z0-9_]{2,15}$/,//(?![0-9]+$)
		vdate_: /^\d{4}-\d{1,2}-\d{1,2}/,
		vpwd: /^(?![0-9]+$)\w{6,18}$/
	}
	validateObj.foreachForm = function(_m) {
		//给各个控件绑定事件
		//遍历表单下的input
		validateObj.inputArray = $(_m).find("input");
		$.each(validateObj.inputArray, function() {
			//判断是否是radio和checked和file
			switch ($(this).attr("type")) {
				case "radio":
					break;
				case "checkbox":
					//1.判断是否是第一次运行
					//2.判断是否是标有非空属性
					var v_error = $(this).attr("v-error");
					if ($(this).attr("vrequired") != undefined && !globalflag) {
						if (!$(this).attr("checked")) {
							validateObj.unpassStyle(this, v_error ? v_error : validateObj.v_info["vagmt"]);
						} else {
							validateObj.passStyle(this, v_error ? v_error : validateObj.v_info["vagmt"]);
						}
					}
					break;
				case "file":
					break;
				case "button":
					break;
				case "reset":
					break;
				case "color":
					break;
				case "date":
					break;
				case "image":
					break;
				case "hidden":
					break;
				case "number":
					break;
				case "text":
					validateObj.bindEnvent(this);
					break;
				case "password":
					validateObj.bindEnvent(this);
					break;
				default:
					break;
			}
		});
	}
	validateObj.bindEnvent = function(this_) {
		//解决ie8下密码placeholder的替换规则 
		if (globalflag) {
			if ($(this_).attr("class") != "form-c") {
				$(this_).blur(function() {
					validateObj.vallinput(this_);
				});
				$(this_).focus(function() {
					//回归自然状态
					validateObj.passStyle($(this_));
				});
			}
		} else {
			validateObj.vallinput(this_);
		}
	}
	validateObj.vallinput = function(m) {
		var _this = $(m);
		var _thisValue = _this.val().replace(/(^\s*)|(\s*$)/g, "");
		if (_thisValue != "") {
			//判断ie8浏览器
			if (navigator.appName == "Microsoft Internet Explorer" &&(navigator.appVersion.split(";")[1].replace(/[ ]/g, "")== "MSIE8.0"||navigator.appVersion.split(";")[1].replace(/[ ]/g, "")== "MSIE9.0")) {
				var _g = false;
				$.each(validateObj.inputArray, function(k, l) {
					//解决ie8下的密码模块
					if (!_this.is(":hidden")) {
						if ($(l).attr("placeholder") == _thisValue || _this.val() == "") {
							_g = true;
						}
					}
				});
				if (_g) {
					if (_this.attr("vrequired") != undefined) {
						validateObj.unpassStyle(_this[0], "请输入" + _this.attr("placeholder"));
					}
				} else {
					validateObj.vNotnull(_this);
				}
				
			} else {
				validateObj.vNotnull(_this);
			}
		} else {
			//如果不输入字符的情况下根据控件属性看是否通过验证
			if (_this.attr("vrequired") != undefined) {
				//单一位IE8过滤出的条件
				if (_this.attr("type") != "password") {
					if (!_this.is(":hidden")) {
						validateObj.unpassStyle(_this[0], "请输入" + _this.attr("placeholder"));
					}
				} else {
					validateObj.unpassStyle(_this[0], "请输入" + _this.attr("placeholder"));
				}
			}
		}
	}
	validateObj.vNotnull = function(_this) {
		var _thisValue = _this.val();//.replace(/(^\s*)|(\s*$)/g, "");
		//判断是否有验证属性
		if (_this.attr("v-type") != undefined && _this.attr("v-type") != "") {
			var inputVtype = _this.attr("v-type").split(",");
			if (inputVtype.length == 1) {
				//判断不是特殊的输入框 
				if (inputVtype[0] == "valid") {
					//1.判断当前元素不为隐藏方可拿出判断
					if (!_this.is(":hidden")) {
						if (_thisValue.toLowerCase() != _this.attr("valid").toLowerCase()) {
							validateObj.unpassStyle(_this[0], _this.attr("v-error") ? _this.attr("v-error") : validateObj.v_info["valid"]);
						}
					}
				} else if (inputVtype[0] == "vrepwd") {
					if (!_this.is(":hidden")) {
						var preobj = "";
						if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.split(";")[1].replace(/[ ]/g, "")== "MSIE8.0"||navigator.appVersion.split(";")[1].replace(/[ ]/g, "")== "MSIE9.0")) {
							preobj = validateObj.inputArray[validateObj.inputArray.index(_this) - 2];
						} else {
							preobj = validateObj.inputArray[validateObj.inputArray.index(_this) - 1];
						}
						if (preobj.value !== _this.val()) {
							validateObj.unpassStyle(_this[0], _this.attr("v-error") ? _this.attr("v-error") : validateObj.v_info['vrepwd']);
						}
					}
				} else {
					if (!_this.is(":hidden")) {
						//根据valid判断是否需要异步判断 
						var zzobj = validateObj.RegExs[inputVtype[0]];
						if (!zzobj.test(_thisValue)) {
							validateObj.unpassStyle(_this[0], _this.attr("v-error") ? _this.attr("v-error") : validateObj.v_info[inputVtype[0]]);
						} else {
							if (_this.attr("valid") != undefined && _this.attr("valid") != "") {
								if (_this.attr("valid") == _thisValue) {
									validateObj.unpassStyle(_this[0], "该用户名已存在");
								}
							}
						}
					}
				}
			} else {
				var _flag = false,
					_o = undefined;
				$.each(inputVtype, function(i, _j) {
					var zzobj = validateObj.RegExs[_j];
					if (zzobj.test(_thisValue)) {
						_flag = true;
						_o = _j
					}
				}); 
				
				if (_o != undefined) {
					if (_o == "vphone") {
						validateObj.showhidecaptcha(_this, true);
					} else {
						validateObj.showhidecaptcha(_this, false);
					}
				}
				
				if (!_flag) {
					//看是正整数吗
					if (/^[1-9]\d*$/.test(_thisValue)) {
						validateObj.showhidecaptcha(_this, true);
						validateObj.unpassStyle(_this[0], _this.attr("v-error") ? _this.attr("v-error") : validateObj.v_info["vphone"]);
					} else {
						validateObj.showhidecaptcha(_this, false);
						validateObj.unpassStyle(_this[0], _this.attr("v-error") ? _this.attr("v-error") : validateObj.v_info["vemail"]);
					}
				}else{
					if(_this.attr("valid") != undefined && _this.attr("valid") != ""){
						if (_this.attr("valid") == _thisValue) {
							   validateObj.unpassStyle(_this[0],_this.attr("placeholder")+"已被占用");
						 }
					}
				}
			}
		}
	}
	validateObj.showhidecaptcha = function(_m, bool) {
		var _next_obj = $(_m).parent().parent().next();
		if (_next_obj.find("input").size() > 1) { 
			if (bool) {
				//动态给手机验证码添加非空属性和数据
				_next_obj.find(".otherblock").show();
				_next_obj.find(".otherblock").find("input").show();
				_next_obj.find(".leftblock").hide();
				_next_obj.find(".leftblock").find("input").hide();
				_next_obj.find(".rightblock").hide();
			} else {
				//动态给手机验证码添加非空属性和数据
				_next_obj.find(".otherblock").hide();
				_next_obj.find(".otherblock").find("input").hide();
				_next_obj.find(".leftblock").show();
				_next_obj.find(".leftblock").find("input").show();
				_next_obj.find(".rightblock").show();
			}
		}
	}
	validateObj.unpassStyle = function(m, errorInfo) {
			validateObj.globalfalg = false;
			var imgObj = $(m).prev(".input-group-addon").find("img");
			if (imgObj.length > 0) {
				imgObj.attr("src", imgObj.attr("src").replace(/blue/img, "Orange"));
			}
			/*$(m).parent().css({ border: "1px solid red" }); */
			$(m).parent().parent(".form-group").find(".help-block").show();
			$(m).parent().parent(".form-group").find(".help-block").children("div").removeClass('_right');
			$(m).parent().parent(".form-group").find(".help-block").children("div").addClass('_error');
			$(m).parent().parent(".form-group").find(".help-block").children("div").html(errorInfo);
		}
		//验证通过的时候样式修改
	validateObj.passStyle = function(m) {
		var imgObj = $(m).prev(".input-group-addon").find("img");
		if (imgObj.length > 0) {
			imgObj.attr("src", imgObj.attr("src").replace(/Orange/img, "blue"));
		}
		/*$(m).parent().css({ border: "1px solid #c5c5c5" });*/
		$(m).parent().parent(".form-group").find(".help-block").hide();
		//修改图标
		/*$(m).parent().next(".help-block").children("div").removeClass('_error');
		$(m).parent().next(".help-block").children("div").addClass('_right');
		$(m).parent().next(".help-block").children("div").html($(m).attr("success") ? $(m).attr("success") : "恭喜验证通过");*/
	}
	$.fn.validate = validate;
})(jQuery);
//处理验证未有通过的样式