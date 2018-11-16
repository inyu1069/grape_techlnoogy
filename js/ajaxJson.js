$(function() {
	$.ajax({
		url: 'https://www.easy-mock.com/mock/5bdab006f1739457034b9266/example/putao',
		// url:'a.txt',
		type: 'get',
		data: {

		},
		async: false,
		dataType: 'json',
//		 timeout: 4000,
		// jsonp:'jsonpcallback'
	}).done(function(result) {
		var data1 = result.data.strategy;
		for (var i = 0; i < data1.length; i++) {
			 $('.st_left .st_left_top').append(`
			 	<a href="javascript:;">
			 		<figure class="clearfix">
			 			<img class="left" src="${data1[i].stImg}" />
			 			<figcaption class="left">
			 				<h2>${data1[i].stH2}</h2>
			 				<p>${data1[i].stP}</p>
			 				<time>${data1[i].stTime}</time>
			 			</figcaption>
			 		</figure>
			 	</a>`);
//		 console.log(result)
		}
		
		var data2=result.data.store;
		for(var j=0;j<data2.length;j++){
			$(".store_list").append(`
				<div class="store_list_box">
					<div class="store_box_title clearfix">
						<h3 class="left">${data2[j].storeName}</h3>
						<p class="right">直营店</p>
					</div>
					<p class="p_one">地址</p>
					<p class="p_two">${data2[j].storeAdress}</p>
					<div class="contact_box">
						<div>
							<p class="p_one">营业时间</p>
							<p class="p_two">${data2[j].storeTime}</p>
						</div>
						<div>
							<p class="p_one">联系方式</p>
							<p class="p_two">${data2[j].storePhone}</p>
						</div>
					</div>
					<div class="list_btn_box">
						<div class="check_map">查看地图</div>
						<div class="send_phone">发送地址到手机</div>
					</div>
				</div>`);
		}
		
		var edusolve=result.data.edu.eduSolve;
		for(var i=0;i<edusolve.length;i++){
			$("#solve_img_box").append(`<img src="${edusolve[i].eduImg}"/>`);
			$("#solve_right").append(`
				<div class="solve_txt">
					<h3>${edusolve[i].eduH3}</h3>
					<p>
						${edusolve[i].eduP1}<br/>
						${edusolve[i].eduP2}
					</p>
				</div>
			`)
		}
		
		var educase=result.data.edu.eduCase;
		for(var i=0;i<educase.length;i++){
			$("#case_img_box").append(`<img src="${educase[i].eduImg}"/>`);
			$("#case_right").append(`
				<div class="solve_txt">
					<h3>${educase[i].eduH3}</h3>
					<p>
						${educase[i].eduP}
					</p>
				</div>
			`)
		}
		
	})
})
