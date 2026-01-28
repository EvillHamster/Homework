

export function initSwiper() {
	return new Swiper('.protein__swiper', {
		slidesPerView: 1,
		spaceBetween: 10,
		autoHeight: true,
		pagination: {
			el: '.protein__pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}" data-index="${index + 1}"></span>`;
			}
		}
	});
}