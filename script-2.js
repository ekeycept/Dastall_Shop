
				$("#list").mouseover (function() {
				$("#block").addClass("hover");		
			});
			$("#block").mouseleave (function() {
				$("#block").removeClass("hover");
			});
			
				$("#list").mouseover (function() {
				$("#block-main").addClass("hover");		
			});
			$("#block-main").mouseleave (function() {
				$("#block-main").removeClass("hover");
			});
			
			$("#list").mouseover (function() {
				$("#block-account").addClass("hover");		
			});
			$("#block-account").mouseleave (function() {
				$("#block-accont").removeClass("hover");
			});
			
			$("#list").mouseover (function() {
				$("#block-product").addClass("hover");		
			});

			$("#block-product").mouseleave (function() {
				$("#block-product").removeClass("hover");
			});
			
			
			$("body").click (function() {
				$("#block-main").removeClass("hover");
			});
			
			$("body").click (function() {
				$("#block-product").removeClass("hover");
			});
			
			$("body").click (function() {
				$("#block").removeClass("hover");
			});
			
			$("body").click (function() {
				$("#block-account").removeClass("hover");
			});
			
				function imgSlider(anything){
				document.querySelector('.foto').src = anything;
			}
				
				