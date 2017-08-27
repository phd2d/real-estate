jQuery(document).ready(function($) {
	if($('.page-gallery-lightslider .light-slider').length  && jQuery().lightSlider ){
		$('.page-gallery-lightslider .light-slider').each(function(index, el) {
			$(this).lightSlider({
		      gallery:true,
		      item:1,
		      vertical:true,
		      verticalHeight:515,
		      vThumbWidth:160,
		      thumbItem:5,
		      thumbMargin:15,
		      slideMargin:0,
		      galleryMargin:30,
		      responsive : [
		        {
		            breakpoint:1200,
		            settings: {
		            	verticalHeight:420,
		            	thumbItem:4
		          	}
		        },
		        {
		            breakpoint:992,
		            settings: {
		            	verticalHeight:296,
		            	thumbItem:3
		          	}
		        },
		        {
		            breakpoint:768,
		            settings: {
		                gallery:false,
		                vertical:true,
		                verticalHeight:320,
		                pager:true,
		                controls:false
		          	}
		        },
		        {
		            breakpoint:480,
		            settings: {
		            	gallery:false,
		                vertical:true,
		                verticalHeight:193,
		                 pager:true,
		                controls:false
		          	}
		        }
		    ]
		    });  
		});
	}

	//RealEstate
	if($('.page-real .light-slider').length  && jQuery().lightSlider ){
		$('.page-real .light-slider').each(function(index, el) {
			$(this).lightSlider({
		      gallery:true,
		      item:1,
		      vThumbWidth:120,
		      thumbItem:5,
		      thumbMargin:10,
		      slideMargin:0,
		      galleryMargin:10,
		      responsive : [
		        {
		            breakpoint:1200,
		            settings: {
		            	thumbItem:4
		          	}
		        },
		        {
		            breakpoint:992,
		            settings: {
		            	thumbItem:3
		          	}
		        },
		        {
		            breakpoint:768,
		            settings: {
		                gallery:false,
		                pager:true,
		                controls:false
		          	}
		        },
		        {
		            breakpoint:480,
		            settings: {
		            	gallery:false,
		                 pager:true,
		                controls:false
		          	}
		        }
		    ]
		    });  
		});
	}
});