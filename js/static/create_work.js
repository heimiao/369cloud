//自定义复选框js LY
function _radioChecked(){
	$('.projectType>label>a').removeClass('radioChecked');
	if($(this).is(':checked')==true){
		$(this).next('a').addClass('radioChecked');
	}
}
//自定义下拉框 LY
function _select(){
	$(".sel_wrap").on("change", function() {
		var o;
		var opt = $(this).find('option');
		opt.each(function(i) {
			if (opt[i].selected == true) {
				o = opt[i].innerHTML;
			}
		})
		$(this).find('label').html(o);
	}).trigger('change');
}
