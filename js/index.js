$(function(){
	//轮播图	
	var num = 0;
	var timer = null;
	var clone = $(".banner ul li").first().clone(); //克隆第一张图片
	$(".banner ul").append(clone); //复制到列表最后
	var size = $(".banner ul li").length; //返回匹配元素的数量
	console.log(size);
	//左右键
	$(".btn_right").stop(true, true).click(function() {
		num++;
		move();
//		clearInterval(timer)
	})
	$(".btn_left").stop(true, true).click(function() {
		num--;
		move();
	});
	//定时器的使用，自动开始
	function move() {
		if(num == size) {
			$('.banner ul').css({
				"margin-left": 0
			});
			num = 1;
		}
		if(num == -1) {
			$(".banner ul").css({
				"margin-left": -(size - 1) * 100 + '%'
			});
			num = size - 2;
		}
		$('.banner ul').stop().animate({
			"margin-left": -num * 100 + "%"
		}, 500);
		if(num==3){
			$('.btn_txt span').text(1);
		}else{
			$('.btn_txt span').text(num + 1);	
		}
		
	}

	timer = setInterval(function() {
		num++;
		move();
	}, 3000);

	//鼠标进入暂停
	$('.banner').hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			num++;
			move();
		}, 3000);
	})
	
	
	//攻略效果
	$(".wt_main a").hover(function(){
		$(this).css("box-shadow"," 0px 0px 20px 5px  rgba(0, 0, 0, 0.2)");
		$(this).find(".wt_txt").stop().animate({"height":"83"},300,"linear");
		$(this).find(".wt_txt p").stop(true,true).fadeIn(500);
	},function(){
		$(this).css("box-shadow"," 0 2px 4px 0 rgba(0, 0, 0, 0.1)");
		$(this).find(".wt_txt").stop().animate({"height":"54"},300,"linear");
		$(this).find(".wt_txt p").stop(true,true).fadeOut(500);
	})
		
	
	
	
})
