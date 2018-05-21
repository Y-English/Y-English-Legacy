// 表单的js动态设置都放在这里
	//这段代码是设置表单text的value值随focus和blur变化的效果。
$(document).ready(function(){
	//text表单
	$('input:text').each(function(){			
	//给每个input都套用
		var txt = $(this).val();				//获取value初始默认值
		$(this).focus(function(){
			if(txt === $(this).val())
				$(this).val("");
		}).blur(function(){
			if($(this).val()=="")
				$(this).val(txt);
			});
});
	//password表单
	$('input:password').each(function(){			
	//给每个input都套用
		var txt = $(this).val();				//获取value初始默认值
		$(this).focus(function(){
			if(txt === $(this).val())
				$(this).val("");
		}).blur(function(){
			if($(this).val()=="")
				$(this).val(txt);
			});
	});
});	