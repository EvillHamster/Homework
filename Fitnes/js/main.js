(function () {
	const swiper = new Swiper('.about__swiper', {
		// Optional parameters
		slidesPerView: 1,
		spaceBetween: 10,
		autoHeight: true,
		direction: 'vertical',


		// If we need pagination
		pagination: {
			el: '.about__pagination',
			clickable: true,
		},
	});
})()