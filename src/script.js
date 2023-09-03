$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:2,
    slidesToScroll: 1,
		autoplay:true,
		speed:2000,
		autoplaySpeed:2000,
    vertical: true,
    rows: 2,
    slidesPerRow: 2,
		// mobileFirst: true,
		
		// adaptiveHeight:false,
		responsive:[
			{
				// breakpoint: 768,
				// settings: {
				// 	slidesToShow:2
				// }
			},
			{
				breakpoint: 1020,
				settings: {
					slidesToShow:1
				}
			}
		]


		
	});
});
