(function () {

	document.addEventListener('click', BurgerInit);

	// Function BURGER MENU
	function BurgerInit(e) {

		const BurgerIcon = e.target.closest('.burger__icon');
		const BurgerNavLink = e.target.closest('.nav__link');

		if (!BurgerIcon && !BurgerNavLink) return
		if (document.documentElement.clientWidth > 1200) return

		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else { document.body.classList.remove('body--opened-menu') }
	}
}
	// const swiper = new Swiper('.about-swiper', {
	// 	slidesPerView: 1,
	// 	spaceBetween: 10,
	// 	autoHeight: true,
	// 	pagination: {
	// 		el: '.about-pagination',
	// 		clickable: true,
	// 		renderBullet: function (index, className) {
	// 			return `<span class="${className}" data-index="${index + 1}"></span>`;
	// 		}
	// 	}
	// });


)()