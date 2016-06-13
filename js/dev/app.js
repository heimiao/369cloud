require.config({
	baseUrl: "//g.369cloud.com",
	paths: {
		jquery: "js/jquery-1.10.2.min",
		placeholder: "js/placeholderfriend",
		bootstrap: "bootstrap/js/bootstrap.min",
		//加载左侧滚动条
		scrollMenu: "js/jquery.mCustomScrollbar.concat.min",
		//加载下拉框
		leftselect: "common/self/js/select",
		//加载用户信息下拉
		userMenu: "js/dev/dev_userMenu",
		//复选框
		checkBox: "common/self/js/ckcolor",
		//加载依赖
		leftMenu: "js/dev/leftmenu",
		modal_center: "js/dev/modal_center",
		
 /*************************************以上代码必须要加载的模块******************************************/
	    compile: "http://localhost:8020/dtcloud/js/dev/app/compile",
	    
	    set: "http://localhost:8020/dtcloud/js/dev/app/set"
//	    application:"http://localhost:8020/dtcloud/js/dev/app/application",
	    
			//加载我页面上的效果
		//配置你自己的js样式表比葫芦画瓢应该不难 
		///自定义个属性名：你的js路径

	},
	shim: {
		//定义非模块化的js 比如placeholder和滚动条
		placeholder: {
			deps: ['jquery']
				//exports: 'placeholder'
		},
		scrollMenu: {
			deps: ['jquery']
		},
//		j_circliful: {
//			deps: ['jquery']
//		}
	}
});
//运行加载的 模块
require(['jquery', 'placeholder', 'leftMenu', 'leftselect', 'userMenu', 'checkBox', 'compile','modal_center','set'], function() {
	//初始化复选框
	$(".ckbox").ck({
		"color": "black",
		"background": "#fff",
		"width": 20,
		"height": 20,
		"border": "1px solid #e3e3e3",
		"unckedUrl": "http://localhost:8020/dtcloud/common/self/img/unchecked_bg.png",
		"ckedUrl": "http://localhost:8020/dtcloud/common/self/img/checked_bg.png"
	}) 
});