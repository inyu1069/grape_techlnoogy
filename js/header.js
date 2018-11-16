$(function() {
	$(".nav_product").hover(function() {
		$(".nav_product_down").css("display", "block");
		$(".nav_product_down a").addClass("header_move");
	}, function() {
		$(".nav_product_down").css("display", "none");
		$(".nav_product_down a").removeClass("header_move");
	})
	
	
	//返回顶部
	$('.return_top').hide(); //隐藏按钮
	$(window).scroll(function() {
//		console.log($(this).scrollTop());
	
		//当window的scrolltop距离大于200时显示 
		if($(this).scrollTop() > 200) {
			$('.return_top').fadeIn(800);
		} else {
			$('.return_top').fadeOut(800);
		}
	});
	
	$('.return_top').click(function() {
		$('html ,body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});

})