$(function(){
	//导航选项卡
	$(".tab_nav_item").on("click",function(){
		//上方导航点击变化
		$(this).parent().find(".tab_nav_item").css("color","rgba(255,255,255,.5)");
		$(this).parent().find(".tab_nav_item i").removeClass("ishow");
		$(this).parents(".tab").find(".tab_nav_item").eq($(this).index()).css("color","#fff");
		$(this).parents(".tab").find(".tab_nav_item").eq($(this).index()).find("i").addClass("ishow");
		//下方盒子变化
		$(this).parents(".tab").find(".tab_box").removeClass("box_choose");
		$(this).parents(".tab").find(".tab_box").eq($(this).index()).addClass("box_choose");
	})
	
	//正文部分圆点选项卡
	$(".btn_box span").on("click",function(){
		//按钮圆点变化
		$(this).parent().find("span").removeClass("btn_choose");
		$(this).addClass("btn_choose");
		
		$(this).parents(".tab_box").find(".tab_pic img").removeClass("pic_choose");
		$(this).parents(".tab_box").find(".tab_pic img").eq($(this).index()).addClass("pic_choose");
	})
	
})