function login_img(){
	var lWidth = $(".login_pic_div").width();
	$(".login_pic_div").height(lWidth);
	$(".login_pic_div").css("margin-bottom",lWidth/4);
}

$(function(){
	login_img();
});
