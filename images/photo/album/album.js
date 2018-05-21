// JavaScript Document

$(function(){

$(".album_photos h5").css("opacity","0.7");

/*鼠标移入和移出图片，弹出和收回图片描述*/
$(".album_photos").hover(
	function(){
			
		$(this).children("h5").stop(true).animate({top:"167px"},300);
		
		},function(){
			$(this).children("h5").stop(true).animate({top:"203px"},150);;
			
		});

});
