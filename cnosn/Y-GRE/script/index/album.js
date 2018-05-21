$(document).ready(function(){
	$('.album div').css("opacity","0.3");
	$('.num').css("opacity","0.7");
	var len = $(".num > li").length;
	var index = 0;
	var adTimer;
	$(".num li").mouseover(function(){
		index = $(".num li").index(this);
		showImg(index);	
	}).eq(0).mouseover();
	
	$('.album').hover(function(){
			clearInterval(adTimer);
	},function(){
			adTimer = setInterval(function(){
				showImg(index);
				index++;
				if(index==len){index=0;}
			},4000);
	}).trigger("mouseleave");
	
	function showImg(index){
		var adHeight = $(".photos li").height()+3;
		$(".photos").stop(true,false).animate({opacity:"0"},200).animate({top:-adHeight*index},100).animate({opacity:"1"},400);
		$('.album p').hide(200)
						.eq(index).show(400);
		$(".num li").removeClass("on")
			.eq(index).addClass("on");
	}
});
