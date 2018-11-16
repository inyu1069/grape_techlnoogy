$(function(){
	var personsTop=$(".header").height()+$(".video").height()-300;
	console.log(personsTop)
	$(window).scroll(function(){
		if($(this).scrollTop()>personsTop&&$(this).scrollTop()<(personsTop+$(".persons1").height())){
			$(".persons1").css("display","block");
			$(".persons1 .left").addClass("fadeInLeft animated");
			$(".persons1 .right").addClass("fadeInRight animated");
		}else{
			$(".persons1").css("display","none");
			$(".persons1 .left").removeClass("fadeInLeft animated");
			$(".persons1 .right").addClass("fadeInRight animated");
		}
	})
	$(window).scroll(function(){
		if($(this).scrollTop()>(personsTop+$(".persons1").height())&&$(this).scrollTop()<(personsTop+$(".persons1").height()+$(".persons2").height())){
			$(".persons2").css("display","block");
			$(".persons2 .left").addClass("fadeInLeft animated");
			$(".persons2 .right").addClass("fadeInRight animated");
		}else{
			$(".persons2").css("display","none");
			$(".persons2 .left").removeClass("fadeInLeft animated");
			$(".persons2 .right").addClass("fadeInRight animated");
		}
	})
	$(window).scroll(function(){
		if($(this).scrollTop()>(personsTop+$(".persons1").height()+$(".persons2").height())&&$(this).scrollTop()<(personsTop+$(".persons1").height()+$(".persons2").height()+$(".persons3").height())){
			$(".persons3").css("display","block");
			$(".persons3 .left").addClass("fadeInLeft animated");
			$(".persons3 .right").addClass("fadeInRight animated");
		}else{
			$(".persons3").css("display","none");
			$(".persons3 .left").removeClass("fadeInLeft animated");
			$(".persons3 .right").addClass("fadeInRight animated");
		}
	})
})
