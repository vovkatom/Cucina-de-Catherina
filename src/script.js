$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:2,
    slidesToScroll: 1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:1000,
    vertical: true,
    rows: 2,
    slidesPerRow: 2,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
