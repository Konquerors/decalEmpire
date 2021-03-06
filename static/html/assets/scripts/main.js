var Main = (function () {
	// variables
	var ctr = 0;
	// object
	return {
		init: function () {
			$('#carousel').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				itemWidth: 210,
				itemMargin: 5,
				asNavFor: '#slider'
			});

			$('#slider').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				sync: "#carousel"
			});

			var initFolder = "paint_1"
			$(".paint--colors .colors").css("background-color", function(hex) {
				return "#"+$(this).attr("data-hex");
			});
			$(".paint--colors .colors").click(function() {
				var folder = $(this).attr("data-color");
				$(".flexslider ul.slides li img").each(function() {
					$(this)
						.on('load', function() { $(this).css("visibility", "visible") })
				    .on('error', function() { $(this).css("visibility", "hidden") })
				    .attr("src", function(){
							return $(this).attr("src");
						})
					;
					var src = $(this).attr("src");
					$(this).attr("src", src.replace(initFolder, "paint_"+folder));
				});
				initFolder = initFolder.split("_")[0]+"_"+folder;
			});
		},

		//--------
		nocomma: null
	};
}());

// Init after the page has loaded
jQuery(Main.init);
