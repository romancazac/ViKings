$(document).ready(function(){
	$('.body-slider__items').slick({
		slidesToShow:1,
		slidesToScroll: 1,
		prevArrow:'<button type="button" class="slick-prev arrow arrow1"><img src="./img/l.png" alt=""></button>',
		nextArrow:'<button type="button" class="slick-next arrow arrow2"><img src="./img/r.png" alt=""></button>',
		asNavFor: '.body-content',
		
	
	});
	$('.body-content').slick({
		slidesToShow:1,
		slidesToScroll: 1,
		asNavFor: '.body-slider__items',
		fadecenterMode: true,
		focusOnSelect: true,
		fade: true,
	
	});
    

});

