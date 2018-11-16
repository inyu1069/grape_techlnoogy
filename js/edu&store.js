$(function(){
	var num=0;
	$(".btn_left").stop(true, true).click(function(){
		num--
		translate($(this))
	})
	$(".btn_right").stop(true, true).click(function(){
		num++
		translate($(this))
	})
	function translate(obj){
		if(num<1){
			num=0;
		}
		if(num>$("#solve_img_box img").length-1){
			num=$("#solve_img_box img").length-1;
		}
		obj.parent().prevAll().find(".solve_img_box").animate({"margin-left":-500*num},500);
		obj.parent().parent().nextAll().find(".solve_txt").siblings(".solve_txt").css("display","none").eq(num).css("display","block");
	}
	
	
	var check=true;
	$(".checked_city").click(function(){
		if(check){
			check=false;
			$(".checked_city i").css({
				"border-top-color":"transparent",
				"border-bottom-color":"#959595",
				"margin-top":"0"
			})
			$(".city_list").css({"height":"405"});
		}else{
			check=true;
			$(".checked_city i").css({
				"border-top-color":"#959595",
				"border-bottom-color":"transparent",
				"margin-top":"6px"
			})
			$(".city_list").css({"height":"0"});
		}
		
	})
})
