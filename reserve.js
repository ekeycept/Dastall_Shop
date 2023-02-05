		$("#list").mouseover (function() {
				$("#block").css("display", "block");
				$("#block").css("position", "fixed");			
			});
			
			$("#block").mouseleave (function() {
				$("#block").css("display", "none");
			});
			
				$("#list").mouseover (function() {
				$("#block-main").addClass("hover");		
			});

			$("#block-main").mouseleave (function() {
				$("#block-main").removeClass("hover");
			});
					$("#list").mouseover (function() {
				$("#block-account").css("display", "block");
				$("#block-account").css("position", "fixed");			
			});
			
			$("#block-account").mouseleave (function() {
				$("#block-account").css("display", "none");
			});
			
					$("#list").mouseover (function() {
				$("#block-product").css("display", "block");
				$("#block-product").css("position", "fixed");			
			});
			
			$("#block-product").mouseleave (function() {
				$("#block-product").css("display", "none");
			});
			
			
			$("body").click (function() {
				$("#block-main").css("display", "none");
			});
			
			$("body").click (function() {
				$("#block-product").css("display", "none");
			});
			
			$("body").click (function() {
				$("#block").css("display", "none");
			});
			
			$("body").click (function() {
				$("#block-account").css("display", "none");
			});
			
				function imgSlider(anything){
				document.querySelector('.foto').src = anything;
			}
				