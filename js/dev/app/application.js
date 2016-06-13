define(function($) {
	window.onload=function(){
		function drawCircle(_options){
		    var options = _options || {};    //获取或定义options对象;
		    options.angle = options.angle || 1;
		    options.color = options.color || '#fff';
		    options.lineWidth = options.lineWidth || 10;
		    options.lineCap = options.lineCap || 'square';
		    var oBoxOne = document.getElementById(options.id);
		    var sCenter = oBoxOne.width / 2;
		    var ctx = oBoxOne.getContext('2d');
		    var nBegin = Math.PI / 2;
		    var nEnd = Math.PI * 2;
		    ctx.textAlign = 'center';
//		    ctx.marginTop='20px';
		    ctx.font = 'normal normal bold 20px Arial';
		    ctx.fillText((options.angle * 100) + '%', sCenter, sCenter);
		    ctx.lineCap = options.lineCap;
		    ctx.lineWidth = options.lineWidth;
		    ctx.beginPath();
		    ctx.strokeStyle = '#D8D8D8';
		    ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, nEnd, false);
		    ctx.stroke();
		    var imd = ctx.getImageData(0, 0, 240, 240);
		    function draw(current) {
		        ctx.putImageData(imd, 0, 0);
		        ctx.beginPath();
		        ctx.strokeStyle = options.color == 'grd' ? grd : options.color;
		        ctx.arc(sCenter, sCenter, (sCenter - options.lineWidth), -nBegin, (nEnd * current) - nBegin, false);
		        ctx.stroke();
		    }
		    var t = 0;
		    var timer = null;
		    function loadCanvas(angle) {
		        timer = setInterval(function(){
		            if (t > angle) {
		                draw(options.angle);
		                clearInterval(timer);
		            }else{
		                draw(t);
		                t += 0.02;
		            }
		        }, 20);
		    }
		    loadCanvas(options.angle);
		    timer = null;
		}
		drawCircle({
		    id: 'one',
		    color: '#21a0e8',
		    angle: 0.5,
		    lineWidth: 8
		});
		drawCircle({
		    id: 'two',
		    angle: 0.72,
		    color: '#f3ac24',
		    lineWidth: 8
		});
		}
	
	function edit(){
				if($("." + arguments[0]).attr("disabled")=="disabled"){
					$("." + arguments[0]).addClass("editinput");
					$("." + arguments[0]).removeAttr("disabled");
					$(arguments[1]).find("img").attr("src",$(arguments[1]).find("img").attr("src").replace(/pen/ig,"open"));
				}else{ 
					$("." + arguments[0]).removeClass("editinput");
					$("." + arguments[0]).attr("disabled","disabled");
					$(arguments[1]).find("img").attr("src",$(arguments[1]).find("img").attr("src").replace(/open/ig,"pen"));
					 if(arguments[0]=='applay-title'){
					 	 if($("." + arguments[0]).val().length>20){
					     	$("." + arguments[0]).val($("." + arguments[0]).val().substr(0,20)+"...")
					     }
					 }else{
					 	 if($("." + arguments[0]).val().length>70){
					     	$("." + arguments[0]).val($("." + arguments[0]).val().substr(0,64)+"...")
					     }
					 }
				}
			}
});