$(document).ready(function(){

	//대분류 선택시 중분류 조회
	$("#first_category").on("change", function(){
		$.ajax({
			type:"POST",
			url:"controller",
			data:{"command":"second_category", "firstCategoryId":$("#first_category").val()},
			dataType:"JSON",
			beforeSend:function(){
				//선택된 것이 0번 index면 전송하지 않는다.
				if($("#first_category option").index($("#first_category option:selected"))==0){
					$("#second_category").empty().append("<option value='default'>중분류</option>");
					$("#third_category").empty().append("<option value='default'>소분류</option>");
					$("#thead").empty();
					$("#tbody").empty();
					$("#product_info_layer").hide();
					return false;
				}
			},
			success:function(jsonData){
				
				$("#product_info_layer").hide();
				$("#third_category").empty().append("<option value='DEFALUT'>소분류</option>");
				$("#thead").empty();
				$("#tbody").empty();
				
				//중분류 추가
				var str = "<option value='default'>중분류</option>";
				for(var i = 0; i<jsonData.length;i++){
					str = str+"<option value='"+jsonData[i].categoryId+"'>"+ jsonData[i].categoryName+"</option>";
				}
				$("#second_category").html(str);
			},
			error:errorCallback
		});
	});

	//중분류 선택시 소분류 조회
	$("#second_category").on("change", function(){
		$.ajax({
			type:"POST",
			url:"controller",
			data:{"command":"third_category", "secondCategoryId":$("#second_category").val()},
			dataType:"JSON",
			beforeSend:function(){
				//선택된 것이 0번 index면 전송하지 않는다.
				if($("#second_category option").index($("#second_category option:selected"))==0){
					alert("중분류 선택하세요");
					$("#third_category").empty().append("<option value='default'>소분류</option>");
					$("#thead").empty();
					$("#tbody").empty();
					$("#product_info_layer").hide();
					return false;
				}
			},
			success:function(jsonData){
				
				$("#thead").empty();
				$("#tbody").empty();
				$("#product_info_layer").hide();

				var str = "<option value='default'>소분류</option>";
				
				for(var i=0;i<jsonData.length;i++){
					str = str +"<option value='"+jsonData[i].categoryId+"'>"+jsonData[i].categoryName+"</option>";
				}
				$("#third_category").html(str);
			},
			error:errorCallback
		});
	});
	
	//소분류 선택시 상품 목록 조회
	$("#third_category").on("change", function(){
		$.ajax({
			type:"POST",
			url:"controller",
			data:{"command":"get_product_list", "thirdCategoryId":$("#third_category").val()},
			dataType:"JSON",
			beforeSend:function(){
				if($("#third_category option").index($("#third_category option:selected"))==0){
					$("#thead").empty();
					$("#tbody").empty();
					$("#product_info_layer").hide();
					return false;
				}
			},
			success:function(jsonData){
				
				$("#product_info_layer").hide();
				$("#thead").empty().append($("<tr>")
											  	.append($("<td>").text("제품ID"))
												.append($("<td>").text("제품명"))
												.append($("<td>").text("제조사"))
												.append($("<td>").text("제품가격")));
				
				$("#tbody").empty();
				$.each(jsonData, function(){
					$("#tbody").append(
							$("<tr>").append($("<td>").text(this.productId))
										  .append($("<td>").text(this.productName))
									  	  .append($("<td>").text(this.productMaker))
									  	  .append($("<td>").text(this.productPrice))
					);
				});
			},
			error:errorCallback
		});
	});

	//상품 정보 조회 처리
	$("#tbody").on("click", "tr", function(){//tr에 event 처리
		
		$("#tbody tr").css("background-color", "white");
		$(this).css("background-color", "lightgray");
		
		
		$.ajax({
			type:"POST",
			url:"controller",
			data:{"command":"get_product_info", "productId":$(this).find(":first").text()},
			dataType:"JSON",
			success:function(obj){
				$("#product_info_layer").text(obj.productInfo);
				$("#product_info_layer").show();
			},
			error:errorCallback
		});
	});
});
function errorCallback(xhr, status, err){
		alert(status+", "+xhr.readyState+" "+err);
}

