// JavaScript Document

$(function(){
$('#popup').fadeIn().css({ 
			'margin-top' : "-180px",
			'margin-left' : "-280px"
		}).prepend('<a href="#" class="close"><img src="image/close_pop.png" class="btn_close" title="关闭窗口" alt="Close" /></a>');;
	$('body').append('<div id="fade"></div>');	
	$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();
})