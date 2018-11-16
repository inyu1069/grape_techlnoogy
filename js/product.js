$(function() {
	$(window).scroll(function(){
		if($(this).scrollTop()>30){
			$(".header").fadeOut();
			$(".nav_page2").css({
				"position":"sticky",
				"top":"0",
				"background":"#fff",
				"color":"#646464",
				"box-shadow":"0 2px 4px 0 rgba(0, 0, 0, 0.1)"
			});
			$(".nav_page2 a").css("color","#646464");
		}else{
			$(".header").fadeIn();
			$(".nav_page2").css({
				"position":"absolute",
				"top":"60px",
				"background":"none",
				"color":"#fff",
				"box-shadow":"none"
			});
			$(".nav_page2 a").css("color","#fff");
		}
	})
	
	//科技玩具效果
	$(".toys_main .box").hover(function() {
		$(this).find(".toys_txt").stop().animate({
			"height": "78"
		}, 300, "linear");
		$(this).find(".toys_txt p").stop(true,true).fadeIn(500);
	}, function() {
		$(this).find(".toys_txt").stop().animate({
			"height": "55"
		}, 300, "linear");
		$(this).find(".toys_txt p").stop(true).fadeOut(500);
	})

	//右侧固定栏 积分签到
	$(".point").hover(function(){
		$(".point_code").stop().fadeIn(500);
	},function(){
		$(".point_code").stop().fadeOut(500);
	})

})