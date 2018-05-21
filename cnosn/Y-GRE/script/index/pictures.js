//首页中图片区域样式，默认不透明度85%，鼠标移入触发事件不透明度提升到1，边框变宽，颜色变深。
$(function(){
	//暂时将链接点击事件
	$("#index_gonggao a").fancybox();
	$('#header,#navigation,#container').click(function(){
		//显示popup，并且加载关闭按钮
		$('#popup').fadeIn().prepend('<a href="#" class="close"><img src="image/close_pop.png" class="btn_close" title="关闭窗口" alt="Close" /></a>');
		$('#popup').css({ 
			'margin-top' : "-180px",
			'margin-left' : "-280px"
		});
		
		//给点击弹出框一个黑色背景
		$('body').append('<div id="fade"></div>');	
		//ie内核浏览器滤镜
		$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
	
		//防止链接被触发
		return false;
	});
	
	//Close Popups and Fade Layer
	$('a.close, #fade').live('click', function() { //When clicking on the close or fade layer...
	  	$('#fade , .popup_block').fadeOut(function() {
			$('#fade, a.close').remove();  
	}); //fade them both out
		
		return false;
	});		


	//网站左侧漂浮窗动态js代码
	/*
	var window_height =  $(window).height();
	var window_width = $(window).width();
	for(var i = 0; i<5000; i++){
		$('#float_window').animate({top:window_height+20,left:window_width+20},20000);
		$('#float_window').animate({top:"-150px",left:window_width+150},10);	
		$('#float_window').animate({top:window_height+20,left:"-150px"},20000);
		$('#float_window').animate({top:"-150px",left:"-150px"},10);		
	}
})

*/